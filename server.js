var express = require('express');
var app = express();
app.use(express.static(__dirname + '/unitgenerator'));

var port = 3000; // can use any port

app.listen(port);
console.log('Server deployed and running on port: ' + port);