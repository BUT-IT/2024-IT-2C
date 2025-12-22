// Меморайзирование функции (квадрат числа)
function memoizeSquare() {
  const cache = {};

  return function (x) {
    if (x in cache) {
      return cache[x];
    }
    cache[x] = x * x;
    return cache[x];
  };
}

const square = memoizeSquare();

console.log(square(4)); // 16
console.log(square(4)); // 16 (из кеша)

// Перегруженная функция (1 или 2 аргумента)
// function overloaded(a, b) {
function overloaded(a, b) {
  if (arguments.length === 1) {
    return String(a);
  }
  if (arguments.length === 2) {
    return a + b;
  }
}

console.log(overloaded(5));     // "5"
console.log(overloaded(5, 3));  // 8


// Прототипный метод для функций
Function.prototype.showInfo = function () {
  console.log("Function name:", this.name || "anonymous");
  console.log("Parameters count:", this.length);
};
function sum(a, b) {
  return a + b;
}

sum.showInfo();

/////////////////////////////////////////////////////////////////
// Замыкание (closure)
// arguments.length
// Function.prototype
// Свойства функций: name, length