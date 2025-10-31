"use strict";

console.log('arr' + ' - object'); // operator   +  (конкатенация)
console.log(4 + ' - object');
console.log(4 + + ' - object'); //NaN // + + унарный оператор
console.log(4 + + ' 5 ')
console.log(4 +  ' 5 ')

// инкремент и дикремент
let incr = 10, 
    decr = 10;

// incr++; //increment
// decr--; //decrement
// //prefix
// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

//%%%
console.log(5%2);
// == // ===
console.log(4*2 == 8);
console.log(4*2 == '8');
console.log(4*2 === '8');
console.log(4*2 === 8);
//prioritet
console.log(2+2*2 == 8);
console.log(2+2*2 != 6);
console.log(2+2*2 !== 6);

 // && and // || or
const  isCheked = true,
        isClose = false;
// console.log(isCheked && isClose);
// console.log(isCheked || isClose);
// ! 
console.log(isCheked ||!isClose);

