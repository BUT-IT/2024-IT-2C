function memoizedFibonacci() {
    const cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n <= 1) {
            return n;
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}
const fib = memoizedFibonacci();
console.log(fib(10)); // 55

