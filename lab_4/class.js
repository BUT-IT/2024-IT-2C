// ===== ЧАСТЬ 3. Class-based Inheritance =====

// Animal class
class Animal {
  constructor(name, age) {
	this.name = name;
	this.age = age;
  }

  info() {
	console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Dog class
class Dog extends Animal {
  constructor(name, age, breed) {
	super(name, age);
	this.breed = breed;
  }

  bark() {
	console.log("Woof! Woof!");
  }

  info() {
	super.info();
	console.log(`Breed: ${this.breed}`);
  }
}

// Cat class
class Cat extends Animal {
  constructor(name, age, color) {
	super(name, age);
	this.color = color;
  }

  meow() {
	console.log("Meow!");
  }
}

// Test objects
const dog = new Dog("Rex", 3, "German Shepherd");
dog.info();
dog.bark();

const cat = new Cat("Misty", 2, "Gray");
cat.info();
cat.meow();
