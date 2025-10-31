// Угадай число 

// 	Напишите игру, в которой программа выбирает случайное число от 1 до 100, а пользователь должен его угадать. Используйте цикл do...while, чтобы запрашивать ввод пользователя до тех пор, пока он не угадает число. Выводите подсказки о том, больше или меньше введенное число, чем загаданное.

// * Работаем с формулой Math.floor(Math.random()) 

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

do {
    guess = prompt("Угадайте число от 1 до 100:");
    attempts++;
    if (guess > randomNumber) {
        console.log("Слишком высоко! Попробуйте еще раз.");
    } else if (guess < randomNumber) {
        console.log("Слишком низко! Попробуйте еще раз.");
    } else {
        console.log(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
    }
} while (guess != randomNumber);