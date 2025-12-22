class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} говорит: Гав!`);
    }
}
const dog = new Dog('Шарик');
dog.speak();  // Выведет: Шарик говорит: Гав!
