
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const Department = require('./models/department');
const Student = require('./models/student');
const Course = require('./models/course');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err);
})


const fakerStudents = [
    {
        _id : mongoose.Types.ObjectId(), 
        roll_no : faker.datatype.number(100), 
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    }
    // {
    //     // _id : mongoose.Types.ObjectId(), 
    //     roll_no : faker.datatype.number(100), 
    //     first_name : faker.name.firstName(),
    //     last_name : faker.name.lastName(),
    //     street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
    //     date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
    //     degree : faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech']),
    //     cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
    //     profile_pic : faker.image.image()
    // }, 
    // {
    //     // _id : mongoose.Types.ObjectId(), 
    //     roll_no : faker.datatype.number(100), 
    //     first_name : faker.name.firstName(),
    //     last_name : faker.name.lastName(),
    //     street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
    //     date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
    //     degree : faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech']),
    //     cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
    //     profile_pic : faker.image.image()
    // },
    // {
    //     // _id : mongoose.Types.ObjectId(), 
    //     roll_no : faker.datatype.number(100), 
    //     first_name : faker.name.firstName(),
    //     last_name : faker.name.lastName(),
    //     street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
    //     date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
    //     degree : faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech']),
    //     cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
    //     profile_pic : faker.image.image()
    // }, 
    // {
    //     // _id : mongoose.Types.ObjectId(), 
    //     roll_no : faker.datatype.number(100), 
    //     first_name : faker.name.firstName(),
    //     last_name : faker.name.lastName(),
    //     street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
    //     date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
    //     degree : faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech']),
    //     cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
    //     profile_pic : faker.image.image()
    // }
];

const fakerDepartments = [
    {
        // _id : 01, 
        _id : mongoose.Types.ObjectId(),
        dept_name : 'SCIS'
    }, 
    {
        // _id : 02,
        _id : mongoose.Types.ObjectId(), 
        dept_name : 'SLS'
    }, 
    {
        // _id : 03, 
        _id : mongoose.Types.ObjectId(),
        dept_name : 'SOP'
    }
];

const fakerCourse = [
    {
        dept_id : mongoose.Types.ObjectId(),
        faculty_id : mongoose.Types.ObjectId(), 
        course_name : faker.helpers.arrayElement(['Internet Technologies', 'Operating Systems', 'Programming Methodology', 'Computer Networks', 'Essentials of AI', 'Cloud Computing', 'Data Science', 'Object Oriented Program', 'Python Lab', 'Java Lab', 'C Lab']),

    }
]

console.log(fakerStudents);
console.log(fakerDepartments);
console.log(fakerCourse);

// const fakerDB = async() => {
//     await Student.deleteMany({});
//     await Student.insertMany(fakerStudents);
// }

Student.insertMany(fakerStudents)
    .then(function() {
        console.log("Student Data inserted");
        mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        mongoose.connection.close();
    });

Course.insertMany(fakerCourse)
    .then(function() {
        console.log("Course Data inserted");
        mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        mongoose.connection.close();
    });

Department.insertMany(fakerDepartments)
    .then(function() {
        console.log("Department Data inserted");
        mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        mongoose.connection.close();
    });
// fakerDB().then(() => {
//     mongoose.connection.close();
// });

