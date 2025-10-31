//syntax
switch (выражение) {
    case значение1:
        // код выполняется, если выражение равно значение1
        break;
    case значение2:
        // код выполняется, если выражение равно значение2
        break;
    // можно добавить дополнительные случаи
    default:
        // код выполняется, если ни один из случаев не совпадает
}

//task_1

let fruit = "apple";
let color;
switch (fruit) {
    case "banana":
        color = "Желтый";
        break;
    case "apple":
        color = "Зеленый или красный";
        break;
    case "orange":
        color = "Оранжевый";
        break;
    default:
        color = "Неизвестный фрукт";
}
console.log(color); // Вывод: Зеленый или красный

//task_2
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;
    default:
        dayName = "Некорректный день";
}

console.log(dayName); // Вывод: Среда