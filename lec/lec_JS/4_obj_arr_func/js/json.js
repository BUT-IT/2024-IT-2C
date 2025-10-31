// json_task_1 from example.json file
// {
//   "name": "Alice",
//   "age": 25,
//   "isStudent": false,
//   "courses": ["Math", "Science", "Literature"]
// }

// Парсинг JSON в JavaScript
const jsonString = '{"name":"Alice","age":25,"isStudent":false}';
const user = JSON.parse(jsonString);
console.log(user.name); // Alice

// Преобразование объекта в JSON
// const user = {
//   name: "Bob",
//   age: 30,
//   isStudent: true
// };
const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"Bob","age":30,"isStudent":true}


// parse - parsing

const jsonString = '{"name":"Alice","age":25,"isStudent":false}';
const user = JSON.parse(jsonString);

console.log(user.name); // Alice
console.log(user.age);  // 25