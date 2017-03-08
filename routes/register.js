var express = require('express');
var router = express.Router();
var user = require('../services/user.service')

router.post('/', function(req, res, next){
    console.log("inside post request");
    var newuser = req.body;
     console.log("In routes file");
    user.adduser(newuser, function(err, newuser){
        if(err){
            throw err;
        } else {
            console.log("sending new user" + newuser);
            res.status(200).send(newuser);
        }
    })
});

module.exports = router;