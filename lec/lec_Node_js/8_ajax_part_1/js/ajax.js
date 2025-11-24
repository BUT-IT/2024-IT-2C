
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

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

server.listen(3000, () => console.log("Server running on port 3000"));


const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from Node.js AJAX!" }));
  }
}).listen(3000);

//fetch
function loadData() {
  fetch("/data")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("result").innerText = data.message;
    })
    .catch(error => console.error(error));
}

