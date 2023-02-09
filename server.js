const http = require('http');
const fs = require('fs');

const port = 8080;
const hostname = 'localhost';
const fileName = 'test.html';

const server = http.createServer((req, res) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error getting the file: ${err}.`);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});