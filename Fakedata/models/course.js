const mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const courseSchema = new mongoose.Schema({
    dept_id : {
        type : ObjectId,
        // type : Number,
        required : true,
    }, 
    faculty_id : {
        type : ObjectId,
        required : true,
    },
    course_name : {
        type : String,
        required : true,
        unique : true
    },
});

const Course = mongoose.model('courses', courseSchema);


module.exports = Course;