// ---------- Глобальная переменная (видна везде) ----------
let tasks = []; // массив объектов задач — глобальный (демонстрация)

// ---------- Локальная переменная внутри функции ----------
function addTask(name, minutes) {
  // name: string, minutes: number
  // локальная переменная
  const task = {
    id: Date.now(),        // уникальный id
    name: String(name),
    minutes: Number(minutes),
    done: false
  };
  tasks.push(task);       // используем глобальную переменную
  renderTasks();          // обновляем отображение
}

// Функция подсчёта общего времени
function getTotalTime() {
  // reduce — применение операторов/циклов в функциональном стиле
  return tasks.reduce(function(sum, t) {
    return sum + t.minutes;
  }, 0);
}

// Обработчик удаления (колбэк в событии)
function removeTaskById(id) {
  tasks = tasks.filter(function(t) {
    return t.id !== id;
  });
  renderTasks();
}

// ---------- Работа с DOM: рендер задач ----------
function renderTasks() {
  const container = document.getElementById('tasksContainer');
  container.innerHTML = ''; // очистка

  // создаём элементы через цикл forEach
  tasks.forEach(function(t) {
    // создаём div задачи
    const div = document.createElement('div');
    div.className = 'task';

    // внутренняя часть: название и время
    const info = document.createElement('div');
    info.textContent = t.name + ' — ' + t.minutes + ' мин';

    // кнопка Удалить (анонимная функция в обработчике)
    const btn = document.createElement('button');
    btn.textContent = 'Выполнено';
    btn.addEventListener('click', function() {
      // анонимная функция как колбэк — вызывает удаление по id
      removeTaskById(t.id);
    });

    div.appendChild(info);
    div.appendChild(btn);
    container.appendChild(div);
  });

  // показ общего времени
  const total = getTotalTime();
  document.getElementById('totalTime').textContent = total;
}

/* ---------- Подключение формы через DOM API ---------- */
document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault(); // отменяем перезагрузку
  const name = document.getElementById('taskName').value.trim();
  const minutes = parseInt(document.getElementById('taskTime').value, 10);

  if (!name || isNaN(minutes) || minutes <= 0) {
    alert('Введите корректные данные');
    return;
  }

  addTask(name, minutes);

  // очищаем поля (локальные переменные)
  document.getElementById('taskName').value = '';
  document.getElementById('taskTime').value = '';
});

/* ---------- Пример использования jQuery (альтернативный рендер) ---------- */
//Это необязательно если хотите можете застилизовать
// $(function() {
//   // добавим кнопку для демонстрации jQuery: подсветить все задачи
//   const jqBtn = $('<button>Подсветить задачи</button>').on('click', function() {
//     $('#tasksContainer .task').fadeOut(100).fadeIn(300); // jQuery-анимация
//   });
//   $('body').append(jqBtn);
// });


const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);

const even = numbers.filter(num => num % 2 === 0);
console.log(even); 

const jname = '        jahongir        ';
console.log(jname.trim());
console.log(jname);


