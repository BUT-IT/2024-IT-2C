document.getElementById('xhrButton').addEventListener('click', () => {
    const xhr = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true); // Указываем метод и URL

    // Настраиваем обработчик события на загрузку
    xhr.onload = function () {
        if (xhr.status === 200) { // Проверяем успешный ответ
            document.getElementById('output').innerText = xhr.responseText; // Выводим данные в div
        } else {
            console.error('Ошибка:', xhr.statusText); // Обработка ошибок
        }
    };
    // Отправляем запрос
    xhr.send();
});

document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Выполняем GET-запрос
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не отвечает: ' + response.statusText); // Обработка ошибок
            }
            return response.json(); // Преобразуем ответ в JSON
        })
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2); // Выводим данные в div
        })
        .catch(error => console.error('Ошибка:', error)); // Отлавливаем и выводим ошибки
});