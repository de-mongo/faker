const mongoose = require('mongoose');
// import {Schema, model, Types, PaginateModel} from 'mongoose';
// const {Schema} = require('mongoose')


var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const studentSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        // minlength: 8,
        select: false,
    },
    // _id : {
    //     type : ObjectId,
    //     required : true,
    // }, 
    reg_no : {
        type : String,
        required : true,
        unique : true
    }, 
    dept_id : {
        type : ObjectId,
        // type: Number,
        required : true
    },
    role: {
        type: String,
        enum: ["admin", "faculty", "student"],
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
    courses: [{
        type: ObjectId,
    }],
    // courses : {
    //     type : [ObjectId]
    //     // required : true
    // },
    cgpa : {
        type : Number
        // required : true
    },
    profile_pic : {
        type :  String,
        //required : true
    },
    sem: {
        type: Number
    }
    
});

const Student = mongoose.model('users', studentSchema);


module.exports = Student;

