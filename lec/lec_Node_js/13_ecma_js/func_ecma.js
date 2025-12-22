// Стрелочные функции
    const add = (a, b) => a + b;

// Шаблонные строки
    const greeting = `Привет, ${name}!`;

// Деструктуризация объектов
    const person = { name: 'John', age: 30 };
    const { name, age } = person;

// Промисы
// 	Новый способ работы с асинхронным кодом, позволяющий избежать "адского коллбэка".

    const myPromise = new Promise((resolve, reject) => {
    // асинхронный код
});

// Модули
// Позволяют разделять код на отдельные файлы с использованием import и export.

export const myFunction = () => { /*...*/ };
import { myFunction } from './myModule.js';

// Наследование классов

// Определяем родительский класс Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук.`);
    }
}
// Определяем дочерний класс Dog
class Dog extends Animal {
    speak() {
        console.log(`${this.name} гавкает.`);
    }
}
// Создаем экземпляры классов
const animal = new Animal('Животное');
animal.speak(); // Животное издает звук.
const dog = new Dog('Бобик');
dog.speak(); // Бобик гавкает.

/////////////////////////////////////////////////////////////////

// Частичное применение функций
// Определяем функцию для сложения нескольких чисел
function add(a, b, c) {
    return a + b + c;
}
// Функция для частичного применения
function partial(fn, ...fixedArgs) {
    return function(...newArgs) {
        return fn(...fixedArgs, ...newArgs);
    };
}
// Создаем новую функцию, фиксируя первый аргумент
const add5 = partial(add, 5);
// Используем новую функцию
console.log(add5(10, 15)); // Вывод: 30

/////////////////////////////////////////////////////////////////
// Переопределение функций

// Определяем родительский класс Animal
class Animal {
    speak() {
        console.log('Животное издает звук.');
    }
}
// Определяем дочерний класс Dog
class Dog extends Animal {
    // Переопределяем метод speak
    speak() {
        console.log('Бобик гавкает.');
    }
}
// Создаем экземпляры классов
const animal = new Animal();
animal.speak(); // Вывод: Животное издает звук.

const dog = new Dog();
dog.speak(); // Вывод: Бобик гавкает.

//////////////////////////////////////////////////////////////////
// Полиморфизм

class Animal {
    speak() {
        console.log('Животное издает звук.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Бобик гавкает.');
    }
}

const myAnimal = new Animal();
const myDog = new Dog();

myAnimal.speak(); // Животное издает звук.
myDog.speak();    // Бобик гавкает.

/////////////////////////////////////////////////////////////////

//выше все приведенные примеры самые часто используемые функции ecma js