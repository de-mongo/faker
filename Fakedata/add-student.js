
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Student = require('./models/student');
var constants = require('./constants')


var test = mongoose.connect('mongodb://root:SL1WDaoFsu@65.0.199.223:31911/', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err); 
})

const dept_id_scis = constants.dept_id_scis;
const dept_id_ls = constants.dept_id_ls;
const dept_id_sop = constants.dept_id_sop;
const dept_id_soc = constants.dept_id_soc;
const dept_id_soac = constants.dept_id_soac;
const dept_id_som = constants.dept_id_som;
const dept_id_soman = constants.dept_id_soman;
const dept_id_lit = constants.dept_id_lit;

const fakerStudents = [
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(1000),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        // dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        // courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
];

(async function(){
    await Student.insertMany(fakerStudents)
    .then(function() {
        console.log("Student Data inserted");
        // mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        // mongoose.connection.close();
    });
    mongoose.connection.close();
})();