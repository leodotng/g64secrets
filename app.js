var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('it worked');
});

app.listen(3000, function () {
  console.log('Its working');
});
