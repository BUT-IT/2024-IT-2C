// public/app.js — улучшённый (с fetch-fallback)

(function() {
  const loadBtn = document.getElementById('loadBtn');
  const productsEl = document.getElementById('products');
  const statusEl = document.getElementById('status');

  function setStatus(text) {
    statusEl.textContent = 'Статус: ' + text;
    console.log('[STATUS]', text);
  }

  function renderProducts(list) {
    productsEl.innerHTML = '';
    if (!Array.isArray(list) || list.length === 0) {
      productsEl.innerHTML = '<p>Товары не найдены.</p>';
      return;
    }
    list.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      // защита от XSS и поддержка полей name/id/price
      const name = escapeHtml(p.name || (p.brand ? `${p.brand} ${p.model || ''}` : 'Unknown'));
      const id = escapeHtml(String(p.id || ''));
      const price = escapeHtml(String(p.price || ''));
      div.innerHTML = `<h3>${name}</h3><div>ID: ${id}</div><div class="price">$${price}</div>`;
      productsEl.appendChild(div);
    });
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function(ch) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[ch];
    });
  }

  // Native XMLHttpRequest
  function loadProductsNative() {
    setStatus('загрузка (native)...');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/products', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            renderProducts(data);
            setStatus('успешно (native)');
          } catch (e) {
            console.error('Parse error (native):', e);
            setStatus('ошибка разбора ответа (native)');
          }
        } else {
          console.error('Server error (native):', xhr.status, xhr.responseText);
          setStatus('ошибка сервера (native): ' + xhr.status);
        }
      }
    };
    xhr.onerror = function(e) {
      console.error('XHR network error', e);
      setStatus('сетевая ошибка (native)');
    };
    xhr.send();
  }

  // jQuery AJAX (с fetch-fallback, если jQuery не доступен)
  function loadProductsJQuery() {
    // Если jQuery уже загружен — используем $.ajax
    if (window.jQuery) {
      setStatus('загрузка (jQuery)...');
      $.ajax({
        url: '/api/products',
        method: 'GET',
        dataType: 'json',
        timeout: 10000
      })
      .done(function(data) {
        renderProducts(data);
        setStatus('успешно (jQuery)');
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('jQuery AJAX fail:', textStatus, errorThrown, jqXHR && jqXHR.responseText);
        setStatus('ошибка (jQuery): ' + textStatus);
      });
      return;
    }

    // Если jQuery не загружен — fetch как запасной вариант
    setStatus('jQuery не найден, fallback → fetch (jQuery-эмуляция)');
    fetch('/api/products', { method: 'GET', cache: 'no-store' })
      .then(resp => {
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        return resp.json();
      })
      .then(data => {
        renderProducts(data);
        setStatus('успешно (fetch-fallback)');
      })
      .catch(err => {
        console.error('Fetch fallback error:', err);
        setStatus('ошибка (fetch-fallback): ' + err.message);
      });
  }

  function getSelectedMethod() {
    const radios = document.getElementsByName('method');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) return radios[i].value;
    }
    return 'native';
  }

  loadBtn.addEventListener('click', function() {
    const method = getSelectedMethod();
    productsEl.innerHTML = '';
    if (method === 'native') loadProductsNative();
    else loadProductsJQuery();
  });

  // НЕ автозагружаем на load 
  // window.addEventListener('load', function() { document.getElementById('loadBtn').click(); });

  // Для диагностики: выводим, загружен ли jQuery при старте
  console.log('app.js loaded — jQuery present?', !!window.jQuery);

})();
