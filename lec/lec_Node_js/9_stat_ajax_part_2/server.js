const http = require("http");
const fs = require("fs");
const path = require("path");

// Создаём сервер
const server = http.createServer((req, res) => {

  // 1) API маршрут — отвечает JSON
  if (req.url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Hello from Node.js AJAX!" }));
  }

  // 2) Отдаём статические файлы из public/
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // public/index.html
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });

});

// Запуск сервера
server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
