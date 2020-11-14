const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const fs = require('fs')
const app = express();
app.use(bodyParser.text())

var ipSettings = { spoofEnabled: false, customIP: '8.8.8.8' };

app.get('/ip', function (req, res) {
  if(ipSettings.spoofEnabled){
    res.send(ipSettings.customIP);
  } else {
    (async () => {
	   const response = await fetch('https://ip.goguardian.com/ip');
	   const body = await response.text();
	   res.send(body);
    })();
  }
});

app.get('/', function (req, res) {
  res.redirect('/web');
});

app.get('/web', function (req, res) {
  fs.readFile('src/index.html', 'utf8' , (err, data) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(data);
  });
});

app.get('/web/api/ip', function (req, res) {
  var data = ipSettings;
  (async () => {
	 const response = await fetch('https://ip.goguardian.com/ip');
	 const body = await response.text();
	 data.realIP = body;
   res.send(data);
  })();
});
app.post('/web/api/set_ip', function (req, res, next) {
  var data = JSON.parse(req.body);
  ipSettings.spoofEnabled = data.spoofEnabled;
  ipSettings.customIP = data.customIP;
  res.sendStatus(200);
});

var port = 3000;

app.listen(port, function () {
  console.log(`Express started on port ${port}`);
});
