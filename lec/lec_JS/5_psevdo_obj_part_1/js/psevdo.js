// Временные объекты
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person = createPerson("Alice", 30);
person.greet(); // Вывод: Hello, my name is Alice and I am 30 years old.

// group func

const mathOperations = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

// Использование псевдососедних объектов для выполнения операций
console.log(mathOperations.add(5, 10)); // Вывод: 15
console.log(mathOperations.multiply(4, 3)); // Вывод: 12

// methods + obj

const car = {
    brand: "Toyota",
    model: "Camry",
    getDetails: function() {
        return {
            fullName: `${this.brand} ${this.model}`,
            year: 2020,
            display: function() {
                console.log(`Car: ${this.fullName}, Year: ${this.year}`);
            }
        };
    }
};

const myCar = car.getDetails();
myCar.display(); // Вывод: Car: Toyota Camry, Year: 2020