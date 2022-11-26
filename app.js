const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Hey Amit!, <br>Node App has been deployed with the help of AWS pipeline</h1>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
