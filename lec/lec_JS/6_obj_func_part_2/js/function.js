// func_whitout_parametres
function greet() {
    console.log("Hello, World!");
}

greet(); // Вывод: Hello, World!

// function with parametrs
function functionName(parameters) {
    // тело функции
}

// task_func_with_parametres
function add(a, b) {
    return a + b;
}
// task
let sum = add(3, 5);
console.log(sum); // Вывод: 8


// function with any parametrs
function multiply(x, y, z) {
    return x * y * z;
}
//task
let product = multiply(2, 3, 4);
console.log(product); // Вывод: 24

// func with return
function square(num) {
    return num * num;
}
//task
let squaredValue = square(4);
console.log(squaredValue); // Вывод: 16

//calling func
functionName(arguments);




// anonymus function
// const myFunction = function() {
//     // тело функции
// };
// task
const myFunction = function() {
    console.log("Это анонимная функция!");
};

// task_1 Передача анонимной функции в качестве коллбека
setTimeout(function() {
    console.log("Это выполнится через 2 секунды!");
}, 2000);

// task_2 Анонимные функции в методах массивов
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // Вывод: [2, 4, 6, 8, 10]

// task_3 Немедленно вызываемая анонимная функция (IIFE)
(function() {
    console.log("Эта функция выполняется немедленно!");
})();


// callback function
function doSomething(callback) {
    // действия
    callback();
}
// task_callback
function doSomething(callback) {
    console.log("Выполняю какое-то действие...");
    // действия
    callback(); // Вызов коллбек-функции
}

// Вызов функции с коллбеком
doSomething(function() {
    console.log("Действие завершено!");
});



// task_1  Обработка событий
document.getElementById("myButton").addEventListener("click", function() {
    alert("Кнопка нажата!");
});

// task_2 Асинхронные запросы (XHR)
function fetchData(callback) {
    // Симуляция асинхронного запроса
    setTimeout(function() {
        const data = { name: "Alice", age: 25 };
        callback(data); // Возврат данных через коллбек
    }, 1000);
}

fetchData(function(result) {
    console.log("Полученные данные:", result);
});
 
// task_3 array
const numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num * 2); // Умножаем каждый элемент на 2
});