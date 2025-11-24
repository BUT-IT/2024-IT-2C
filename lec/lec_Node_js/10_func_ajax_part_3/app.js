const express = require('express');
const app = express();
const PORT = 3000;

// Массив для хранения данных
let users = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob' }
];

// Middleware для парсинга JSON
app.use(express.json());

// GET: Получить список всех пользователей
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET: Получить пользователя по ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Пользователь не найден');
    }
});

// POST: Создать нового пользователя
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        // group: req.body.group
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Обновить пользователя
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send('Пользователь не найден');
    }
});

// DELETE: Удалить пользователя
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.send('Пользователь удален');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

