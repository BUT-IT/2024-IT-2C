// app.js — реализация двух способов AJAX: Native и jQuery

(function() {
  const loadBtn = document.getElementById('loadBtn');
  const productsEl = document.getElementById('products');
  const statusEl = document.getElementById('status');

  function setStatus(text) {
    statusEl.textContent = 'Статус: ' + text;
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
      div.innerHTML = `<h3>${escapeHtml(p.name)}</h3><div>ID: ${p.id}</div><div class="price">$${p.price}</div>`;
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
            setStatus('ошибка разбора ответа (native)');
          }
        } else {
          setStatus('ошибка сервера (native): ' + xhr.status);
        }
      }
    };
    xhr.send();
  }

  // jQuery AJAX
  function loadProductsJQuery() {
    if (!window.jQuery) {
      setStatus('jQuery не загружен');
      return;
    }
    setStatus('загрузка (jQuery)...');
    $.ajax({
      url: '/api/products',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      renderProducts(data);
      setStatus('успешно (jQuery)');
    }).fail(function(jqXHR, textStatus, errorThrown) {
      setStatus('ошибка (jQuery): ' + textStatus);
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

  // Optional: load automatically on page load
  // window.addEventListener('load', function() { document.getElementById('loadBtn').click(); });

})();