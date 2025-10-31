// object
// const person = {
//     name: "Alice",
//     age: 30
// };

//method
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// task_obj_1
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log(`${this.brand} ${this.model} is starting.`);
    }
};

car.start(); // Вывод: Toyota Camry is starting.

// fubction

function add(a, b) {
    return a + b;
}
const sum = add(5, 10); // sum будет равно 15

// funca as obj
const multiply = function(x, y) {
    return x * y;
};

const double = (function(func) {
    return function(value) {
        return func(value, 2);
    };
})(multiply);

console.log(double(5)); // Вывод: 10