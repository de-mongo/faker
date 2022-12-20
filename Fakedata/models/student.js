const mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const studentSchema = new mongoose.Schema({
    _id : {
        type : ObjectId,
        required : true,
    }, 
    reg_no : {
        type : String,
        required : true,
    }, 
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    street_address : {
        type : String,
        required : true
    },
    date_of_birth : {
        type : Date,
        required : true
    },
    degree : {
        type :  String,
        required : true
    },
    courses : {
        type : [ObjectId]
        // required : true
    },
    cgpa : {
        type : Number
        // required : true
    },
    profile_pic : {
        type :  String,
        required : true
    }
});

const Student = mongoose.model('Student', studentSchema);


module.exports = Student;

