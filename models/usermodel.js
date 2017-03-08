var mongoose = require('mongoose');
var userregistrationSchema = mongoose.Schema({
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

module.exports = User;