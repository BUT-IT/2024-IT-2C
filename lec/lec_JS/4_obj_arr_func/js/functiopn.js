// function
function greet(name) {
  console.log("Hello, " + name + "!");
}
// call
greet("Alice"); // Hello, Alice!

// arguments + return
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

//return
function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 5)); // 20

// task_1
function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(10, 5)); // 50

// task_2
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false

// task_3
function greetByTime(hour) {
  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}
console.log(greetByTime(10)); // Good morning!