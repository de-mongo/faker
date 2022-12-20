var {faker} = require("@faker-js/faker");// Require needed packages


// Initializing our variables with a different random data each time it is run
// var randomRollNumber = faker.datatype.number(100); //Generates a random roll number between 1 to 100
// var randomFirstName = faker.name.firstName(); // Generates a random first name
// var randomLastName = faker.name.lastName(); //Generates a random last name
// var randomLocation = faker.address.streetAddress() + faker.address.city() + faker.address.country();
// var randomBirthDate = faker.date.between('2000-01-01', '2004-01-01');
//var randomProfilePic = faker.image.people();
//var randomDegree = faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech']);
// var randomDateofAdmission = faker.date.between('2019-05-01', '2022-05-01');
// var randomCGPA = faker.finance.amount(5,10,2);
// var randomEmail = faker.internet.email(); // Generates a random email
// This code runs twenty times
// It produces each time different data
// for (i = 0; i < 20; i++) {
// 	console.log(faker.datatype.number(100)); // Outputs a random roll number
//     console.log(faker.name.firstName()); //Outputs a random first name
//     console.log(faker.name.lastName()); //Outputs a random last name
//     console.log(faker.address.streetAddress() + faker.address.city() + faker.address.country()); //Outputs a random address
//     console.log(faker.date.between('2000-01-01', '2004-01-01')); //Outputs a random birth date
//     //console.log(randomProfilePic); //Outputs a random profile picture
//     console.log(faker.helpers.arrayElement(['IMTech', 'MCA', 'MTech'])); //Outputs a random degree
//     console.log(faker.date.between('2019-05-01', '2022-05-01'));
//     console.log(faker.finance.amount(5,10,2));
// 	console.log(faker.internet.email() + "\n"); // Outputs a random email

// }

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/student');
const Department = require('./models/department');
const Course = require('./models/course')

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err);
})