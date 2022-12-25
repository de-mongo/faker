const mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const departmentSchema = new mongoose.Schema({
    // _id : {
    //     type : ObjectId,
    //     // type: Number,
    //     required : true,
    //     unique : true
    // },
    _id : {
        type : ObjectId, 
    },
    name : {
        type : String,
        required : true,
        unique : true
    }
});

const Department = mongoose.model('depts', departmentSchema);


module.exports = Department;

