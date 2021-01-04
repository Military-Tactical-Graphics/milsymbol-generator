var express = require('express');

var app = express();
app.use(express.static(__dirname + '/unitgenerator'));

var port = process.env.PORT || 3000; // will use $PORT if available, otherwise 3000 (arbitrary)

app.listen(port);
console.log('Server deployed and running on port: ' + port);