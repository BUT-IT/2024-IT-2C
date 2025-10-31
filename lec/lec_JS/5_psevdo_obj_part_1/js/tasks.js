// Задача 1: Создать объект с методами
// Описание: Создайте объект book, который будет содержать свойства title (название книги) и author (автор книги), а также метод getDetails(), который возвращает строку с информацией о книге.

const book = {
    title: "1984",
    author: "George Orwell",
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.getDetails()); // Вывод: 1984 by George Orwell

// Задача 2: Написать функцию, использующую глобальные и региональные переменные
// Описание: Напишите глобальную переменную globalCount, а затем создайте функцию incrementCount(), которая будет увеличивать globalCount на заданное значение. Внутри функции создайте локальную переменную localCount, которая будет отслеживать количество вызовов функции.

let globalCount = 0;

function incrementCount(increment) {
    let localCount = 0; // Локальная переменная
    localCount++;
    globalCount += increment; // Изменение глобальной переменной
    console.log(`Local Count: ${localCount}, Global Count: ${globalCount}`);
}

incrementCount(5); // Вывод: Local Count: 1, Global Count: 5
incrementCount(3); // Вывод: Local Count: 1, Global Count: 8