//string    
let greeting = "Hello, world!";

//num
let age = 25;
let price = 19.99;

//boolean
let isStudent = true;

//null
let user = null;

// undefined
// let x;
console.log(x); 

//symbol
const uniqueID = Symbol('id');

//bigInt
let bigNumber = 123456789012345678901234567890n;

// var - устарел
var x = 10;
if (true) {
    var x = 20; // та же переменная
    console.log(x); // 20
}
console.log(x); // 20

 // let 

let y = 10;
if (true) {
    let y = 20; // другая переменная
    console.log(y); // 20
}
console.log(y); // 10



//global_var

let globalVar = "Я глобальная переменная";

function showGlobalVar() {
    console.log(globalVar); // Доступ к глобальной переменной
}

showGlobalVar(); // "Я глобальная переменная"


//local_var
function localScopeExample() {
    let localVar = "Я локальная переменная";
    console.log(localVar); // Доступ к локальной переменной
}

localScopeExample(); // "Я локальная переменная"
// console.log(localVar); // Ошибка: localVar не определена



//object
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

//literial
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

//construct
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//double
let student = {
    name: "Bob",
    courses: {
        math: 95,
        science: 88
    }
};

//calling
console.log(person.name); // Alice
console.log(car["model"]); // Camry
person.greet(); // Hello, my name is Alice


