// document.getElementById(id) для получения элемента по его уникальному идентификатору
const header = document.getElementById('header');

// document.querySelector(selector) вызов элемента с помощью CSS-селекторов
const paragraph = document.querySelector('.text');

// element.innerHTML - Позволяет изменять HTML-содержимое элемента
paragraph.innerHTML = '<strong>Новый текст</strong>';

// element.style - Позволяет изменять стили элемента напрямую через JavaScript
header.style.color = 'blue';
header.style.fontSize = '24px';

// Sdandart API

// createElement(tagName) - Создает новый элемент с указанным тегом
const newDiv = document.createElement('div');

// appendChild(child) - Добавляет дочерний элемент к родительскому
const container = document.getElementById('container');
container.appendChild(newDiv);

// removeChild(child) - даляет указанный дочерний элемент из родительского
container.removeChild(newDiv);


// EVENTS

// addEventListener(event, handler) - Позволяет добавлять обработчик события к элементу
button.addEventListener('click', () => {
  alert('Кнопка нажата!');
});

// removeEventListener(event, handler) - Удаляет обработчик события с элемента
button.removeEventListener('click', handlerFunction);
