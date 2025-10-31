// Создание глобальной переменной
var globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Доступ к глобальной переменной
}

showGlobal(); // Вывод: I am global
console.log(globalVar); // Вывод: I am global

// Проблема с глобальными переменными
var sharedVar = "Initial";

function modifyVar() {
    sharedVar = "Modified"; // Изменение глобальной переменной
}

modifyVar();
console.log(sharedVar); // Вывод: Modified

// task_local

function localScopeExample() {
    var localVar = "I am local"; // Локальная переменная
    console.log(localVar); // Доступно здесь
}

localScopeExample(); // Вывод: I am local
// console.log(localVar); // Ошибка: localVar не определена

function counter() {
    let count = 0; // Локальная переменная
    return function() {
        count++; // Увеличивает локальную переменную
        console.log(count);
    };
}

const increment = counter();
increment(); // Вывод: 1
increment(); // Вывод: 2

// global+local calling
// task_1

function outerFunction() {
    const outerVar = "I am outside!";

    function innerFunction() {
        console.log(outerVar); // Доступ к переменной из внешней функции
    }

    innerFunction(); // Вывод: I am outside!
}

outerFunction();

// task_2 Замыкание 

function makeCounter() {
    let count = 0; // Локальная переменная

    return function() {
        count++; // Увеличение локальной переменной
        return count; // Возвращает текущее значение
    };
}

const counter = makeCounter();
console.log(counter()); // Вывод: 1
console.log(counter()); // Вывод: 2
console.log(counter()); // Вывод: 3

// task_3

function greet(name) {
    const greeting = "Hello, " + name;

    function displayGreeting() {
        console.log(greeting); // Доступ к переменной greeting
    }

    displayGreeting(); // Вывод: Hello, Alice
}

greet("Alice");

// task_4 
function createMultiplier(factor) {
    return function(x) {
        return x * factor; // Доступ к переменной factor
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Вывод: 10
console.log(triple(5)); // Вывод: 15