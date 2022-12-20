const mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const departmentSchema = new mongoose.Schema({
    _id : {
        type : ObjectId,
        required : true
    }, 
    dept_name : {
        type : String,
        required : true,
        unique : true
    }
});

const Department = mongoose.model('Department', departmentSchema);


module.exports = Department;

