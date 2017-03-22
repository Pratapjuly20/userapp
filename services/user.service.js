var User = require('../models/usermodel');

module.exports = {
    adduser : function(newuser, callback){
        User.create({
            fname : newuser.fname,
            lname : newuser.lname,
            age : newuser.age,
            gender : newuser.gender,
            details : {
                uname : newuser.uname,
                password : newuser.password,
                flag : 'Y'
            }, function(err, result){
                console.log("data saved");
            }
        });
    }
};