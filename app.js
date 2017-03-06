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

var userregistrationSchema = new Schema({
    
    fname : {
        type : String
    },
    lname : {
        type : String
    },
    age : {
        type : Number
    },
    gender : {
        type : String
    },
    details : {
        uname : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        flag : {
            type : Boolean,
            required : true
        }
    }
});

var User = mongoose.model('User', userregistrationSchema);

app.post('/api/register', function(req, res){
    User.create({
        fname : req.body.fname,
        lname : req.body.lname,
        age : req.body.age,
        gender : req.body.gender,
        details : {
            uname : req.body.uname,
            password : req.body.password,
            flag : 'Y'
        }
    }, function(error, User){
        if(error){
            res.send('Saving error');
        }
        res.send(User);
    });
});

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

app.get('*', function(req, res){
    res.sendFile('index.html');
});

app.listen(8080);