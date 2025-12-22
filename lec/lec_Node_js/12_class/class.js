class Vehicle {
	constructor(name) {
		this.name = name;
	}
	
	display() {
		console.log(`Транспортное средство: ${this.name}`);
	}
}

class Car extends Vehicle {
	display() {
		super.display();
		// Транспортное средство
		console.log("Это автомобиль!");
	}
}

const myCar = new Car("Toyota");
myCar.display();  