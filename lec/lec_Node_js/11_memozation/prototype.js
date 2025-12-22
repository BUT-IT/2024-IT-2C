// Function.prototype.call()
// Позволяет вызывать функцию с указанным значением this и аргументами, переданными по отдельности.
 
function greet() {
    return `Привет, ${this.name}!`;
}

const person = { name: 'Алексей' };
console.log(greet.call(person)); // Привет, Алексей!



// Function.prototype.apply()
// Позволяет вызывать функцию с указанным значением this и аргументами, переданными в виде массива.

function introduce(greeting) {
    return `${greeting}, ${this.name}!`;
}

const user = { name: 'Мария' };
console.log(introduce.apply(user, ['Здравствуйте'])); // Здравствуйте, Мария!
