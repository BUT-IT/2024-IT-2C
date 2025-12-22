
// ===== ЧАСТЬ 1. Built-in Objects =====

// String
let text = "Hello World";

console.log("UpperCase:", text.toUpperCase());
console.log("Index of 'World':", text.indexOf("World"));
console.log("Replace:", text.replace("World", "JS"));

// Array
let numbers = [5, 12, 8, 130, 44];

let greaterThanTen = numbers.filter(num => num > 10);
console.log("Elements > 10:", greaterThanTen);

numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers);

numbers.pop();
console.log("After pop:", numbers);

// Math
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random (1-100):", randomNumber);

console.log("Sqrt of 144:", Math.sqrt(144));
console.log("Floor 4.67:", Math.floor(4.67));
console.log("Ceil 4.67:", Math.ceil(4.67));

// Date
let now = new Date();
console.log("Current date:", now);

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // месяцы с 0
console.log("Day:", now.getDate());

let birthday = new Date(2000, 0, 1); // пример: 1 января 2000
console.log("Birthday:", birthday);

// ===== ЧАСТЬ 2. Built-in Functions =====

console.log("parseInt('42px'):", parseInt("42px"));
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc"));

console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(123):", isNaN(123));
console.log("isNaN('123'):", isNaN("123"));

setTimeout(() => {
  console.log("Сообщение через 2 секунды");
}, 2000);
