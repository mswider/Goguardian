const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from Express!');
});

var port = 3000;

app.listen(port, function () {
  console.log(`Express started on port ${port}`);
});
