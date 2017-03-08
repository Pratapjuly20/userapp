var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Schema = mongoose.Schema;
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/userregistrationdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("we are connected");
});

var home = require('./routes/home');

app.use('/', home);
var register = require('./routes/register');
app.use('/register', register);

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

// app.get('*', function(req, res){
//     res.sendFile('index.html');
// });

app.listen(8080);

module.exports = app;