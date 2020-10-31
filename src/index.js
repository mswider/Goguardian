const express = require('express');
const app = express();

app.get('/ip', function (req, res) {
  res.send('8.8.8.8');
});

var port = 3000;

app.listen(port, function () {
  console.log(`Express started on port ${port}`);
});
