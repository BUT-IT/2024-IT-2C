// Создание объекта:

// С помощью литеральной нотации:

const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// С помощью конструктора Object:

const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
// Доступ к свойствам
console.log(person.name); // Alice
// Вызов методов
person.greet(); // Hello, Alice


// task_1 object
const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
  read: function() {
    console.log("Reading " + this.title);
  }
};

// task_2 object
const user = {
  username: "john_doe",
  email: "john@example.com",
  isActive: true,
  login: function() {
    this.isActive = true;
    console.log(this.username + " has logged in.");
  }
};