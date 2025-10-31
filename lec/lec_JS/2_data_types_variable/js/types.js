'use strict';
//num types
let num = 4 ;
let num2 = 4.4 ;

console.log(4/0); /* infinity */
console.log('string' * 9); /* NaN */

//string
const person = 'John'; // какую кавычки выбрать без разницы самое главное одиинаковые были 
const employe = "wok"
const numStr = `5`;

//boolean true or false
const bool = true;
// const bool = false;


//null - не существующий объект
console.log(somthing); //referenceError

//undefined - нет никакого значения
let und; 
console.log(und)

//object-complex 
const obj = {
    name: 'john', // свойства объекта 
    age:27,
    isMarried: false
};
console.log(obj.name); //через точку обращаем к объекту и вызываем свойства объекта 
console.log(obj["name"]); //тут обращаемся через квадратные скобки

//array
let arr = ["img1", "img2", 5, "img3",{},[]]; //классический массив
console.log(arr[2]);

//разница между МАССИВАМИ и ОБЪЕКТАМИ
//ARRAY vs OBJECT
//syntax
const array = ['1', '2', '3'];
console.log(array[1]);

array[10] = '12345' //dont recomeded
console.log(array[10]);
console.log(array);

const object = { a: 1 , b: 2, c: 3};

const workers = {
    'anna' : 500,
    'ben' :600,
    alex:700
}
//functional
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};
const b = 'b';
console.log(arrObj.a);
console.log(arrObj[1]);
console.log(arrObj[2]);
// adding value
// arrObj.b = '123';
// arrObj['b'] = '1234';
arrObj[b] = '1234';

console.log(arrObj['b']); /* adding  new string value */
console.log(arrObj.b); /* calling b */

// obj in obj,array
const arrObj2 = {
    a: 'a',
    '1': 'b',
    2: 'c',
    abc:{
        b:[],
        d:{}
    }
    
};
arrObj2[b] = {};
arrObj2[b] = [];