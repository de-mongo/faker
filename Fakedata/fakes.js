
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const Department = require('./models/department');
const Student = require('./models/student');
const Course = require('./models/course');
const { db } = require('./models/student');

var test = mongoose.connect('mongodb://root:SL1WDaoFsu@65.0.199.223:31911/', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err); 
})

const dept_id_scis = mongoose.Types.ObjectId();
const dept_id_ls = mongoose.Types.ObjectId();
const dept_id_sop = mongoose.Types.ObjectId();
const dept_id_soc = mongoose.Types.ObjectId();
const dept_id_soac = mongoose.Types.ObjectId();
const dept_id_som = mongoose.Types.ObjectId();
const dept_id_soman = mongoose.Types.ObjectId();
const dept_id_lit = mongoose.Types.ObjectId();


const fakerStudents = [
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
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
        reg_no : faker.datatype.number(100),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]), 
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100),
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    }, 
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        email : faker.internet.email(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        courses : [mongoose.Types.ObjectId()],
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    },
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    }, 
    {
        _id : mongoose.Types.ObjectId(), 
        reg_no : faker.datatype.number(100), 
        dept_id : faker.helpers.arrayElement([dept_id_scis, dept_id_ls, dept_id_sop, dept_id_soc, dept_id_soac, dept_id_som, dept_id_som, dept_id_soman, dept_id_lit]),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        street_address : faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        date_of_birth : (faker.date.between('2000-01-01', '2004-01-01')),
        degree : faker.helpers.arrayElement(['Bachelors', 'Masters']),
        cgpa : faker.datatype.float({ min: 5, max: 10, precision: 0.1 }),
        profile_pic : faker.image.image()
    }
];

const fakerDepartments = [
    {
        // _id : 01,
        _id: dept_id_scis,
        dept_name: "School of Computer Science",
      },
      {
        // _id : 02,
        _id: dept_id_ls,
        dept_name: "School of Life Sciences",
      },
      {
        // _id : 03,
        _id: dept_id_sop,
        dept_name: "School of Physics",
      },
      {
        // _id : 03,
        _id: dept_id_soc,
        dept_name: "School of Chemistry",
      },
      {
        // _id : 03,
        _id: dept_id_soac,
        dept_name: "School of Arts & Commerce",
      },
      {
        // _id : 03,
        _id: dept_id_som,
        dept_name: "School of Mathematics",
      },
      {
        // _id : 03,
        _id: dept_id_soman,
        dept_name: "School of Management",
      },
      {
        // _id : 03,
        _id: dept_id_lit,
        dept_name: "School of Literature",
      }
];

const faculty_id_scis_1 = mongoose.Types.ObjectId();
const faculty_id_scis_2 = mongoose.Types.ObjectId();
const faculty_id_scis_3 = mongoose.Types.ObjectId();
const faculty_id_scis_4 = mongoose.Types.ObjectId();
const faculty_id_scis_5 = mongoose.Types.ObjectId();


const faculty_id_ls_1 = mongoose.Types.ObjectId();
const faculty_id_ls_2 = mongoose.Types.ObjectId();
const faculty_id_ls_3 = mongoose.Types.ObjectId();


const faculty_id_sop_1 = mongoose.Types.ObjectId();
const faculty_id_sop_2 = mongoose.Types.ObjectId();
const faculty_id_sop_3 = mongoose.Types.ObjectId();

const faculty_id_soc_1 = mongoose.Types.ObjectId();
const faculty_id_soc_2 = mongoose.Types.ObjectId();
const faculty_id_soc_3 = mongoose.Types.ObjectId();

const faculty_id_soac_1 = mongoose.Types.ObjectId();
const faculty_id_soac_2 = mongoose.Types.ObjectId();
const faculty_id_soac_3 = mongoose.Types.ObjectId();
const faculty_id_soac_4 = mongoose.Types.ObjectId();

const faculty_id_som_1 = mongoose.Types.ObjectId();
const faculty_id_som_2 = mongoose.Types.ObjectId();
const faculty_id_som_3 = mongoose.Types.ObjectId();

const faculty_id_soman_1 = mongoose.Types.ObjectId();
const faculty_id_soman_2 = mongoose.Types.ObjectId();
const faculty_id_soman_3 = mongoose.Types.ObjectId();
const faculty_id_soman_4 = mongoose.Types.ObjectId();

const faculty_id_lit_1 = mongoose.Types.ObjectId();
const faculty_id_lit_2 = mongoose.Types.ObjectId();
const faculty_id_lit_3 = mongoose.Types.ObjectId();
const faculty_id_lit_4 = mongoose.Types.ObjectId();
const faculty_id_lit_5 = mongoose.Types.ObjectId();
const faculty_id_lit_6 = mongoose.Types.ObjectId();
const faculty_id_lit_7 = mongoose.Types.ObjectId();
const faculty_id_lit_8 = mongoose.Types.ObjectId();
const faculty_id_lit_9 = mongoose.Types.ObjectId();

 



const fakerCourse = [
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_1,
        course_name : "Internet Technologies" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_4,
        course_name : "Operating Systems" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_3,
        course_name : "Computer Networks" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_2,
        course_name : "Data Science" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_2,
        course_name : "Java Lab" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_4,
        course_name : "Cloud Computing" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_5,
        course_name : "Python Lab" 
    },
    {
        dept_id : dept_id_scis,
        faculty_id : faculty_id_scis_5,
        course_name : "C Programming Lab" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_1,
        course_name : "Biochemistry" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_2,
        course_name : "Zoology" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_2,
        course_name : "Biology" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_3,
        course_name : "Botany" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_1,
        course_name : "Microbiology" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_3,
        course_name : "Food Science and Nutrition" 
    },
    {
        dept_id : dept_id_ls,
        faculty_id : faculty_id_ls_1,
        course_name : "Biomedical Engineering" 
    },
    {
        dept_id : dept_id_sop,
        faculty_id : faculty_id_sop_1,
        course_name : "Waves and Oscillations" 
    },
    {
        dept_id : dept_id_sop,
        faculty_id : faculty_id_sop_1,
        course_name : "Classical Mechanics" 
    },
    {
        dept_id : dept_id_sop,
        faculty_id : faculty_id_sop_3,
        course_name : "Light and it's Properties" 
    },
    {
        dept_id : dept_id_sop,
        faculty_id : faculty_id_sop_3,
        course_name : "Magnetism and Electricity" 
    },
    {
        dept_id : dept_id_sop,
        faculty_id : faculty_id_sop_2,
        course_name : "Quantum Physics" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id : faculty_id_soc_1,
        course_name : "Organic Chemistry" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id : faculty_id_soc_2,
        course_name : "Physical Chemistry" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id : faculty_id_soc_1,
        course_name : "Inorganic Chemistry" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id : faculty_id_soc_2,
        course_name : "Forensic Science" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id :faculty_id_soc_3,
        course_name : "Principles of Spectroscopy" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id : faculty_id_soc_3,
        course_name : "Computational Chemistry" 
    },
    {
        dept_id : dept_id_soc,
        faculty_id : faculty_id_soc_3,
        course_name : "Nuclear & Radiochemistry" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_2,
        course_name : "Psychology" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_1,
        course_name : "Physical Education" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_3,
        course_name : "Media Studies" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_3,
        course_name : "Fashion Studies" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_2,
        course_name : "History" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_3,
        course_name : "Mass Media Studies" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_4,
        course_name : "Political Sciences" 
    },
    {
        dept_id : dept_id_soac,
        faculty_id : faculty_id_soac_4,
        course_name : "Human Rights and Gender Studies" 
    },
    {
        dept_id : dept_id_som,
        faculty_id : faculty_id_som_1,
        course_name : "Pure Mathematics" 
    },
    {
        dept_id : dept_id_som,
        faculty_id : faculty_id_som_2,
        course_name : "Applied Mathematics" 
    },
    {
        dept_id : dept_id_som,
        faculty_id : faculty_id_som_2,
        course_name : "Computational Mathematics" 
    },
    {
        dept_id : dept_id_som,
        faculty_id : faculty_id_som_1,
        course_name : "Algebra and Number Theory" 
    },
    {
        dept_id : dept_id_som,
        faculty_id :faculty_id_som_3,
        course_name : "Topology and Foundations" 
    },
    {
        dept_id : dept_id_som,
        faculty_id : faculty_id_som_3,
        course_name : "Geometric Analysis" 
    },
    {
        dept_id : dept_id_som,
        faculty_id : faculty_id_scis_5,
        course_name : "Probability and Statistics" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id :faculty_id_soman_1,
        course_name : "Accountancy" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id : faculty_id_soman_2,
        course_name : "Business Studies" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id : faculty_id_soman_3,
        course_name : "Economics" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id : faculty_id_soman_2,
        course_name : "Finance Management" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id : faculty_id_soman_3,
        course_name : "Resource Management" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id : faculty_id_soman_2,
        course_name : "Marketing Management" 
    },
    {
        dept_id : dept_id_soman,
        faculty_id : faculty_id_soman_4,
        course_name : "Hotel Management" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_1,
        course_name : "Hindi" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_2,
        course_name : "English" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_3,
        course_name : "Telugu" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_2,
        course_name : "Sanskrit" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_4,
        course_name : "Spanish" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_5,
        course_name : "French" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_6,
        course_name : "Urdu" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_7,
        course_name : "German" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_8,
        course_name : "Kannada" 
    },
    {
        dept_id : dept_id_lit,
        faculty_id : faculty_id_lit_9,
        course_name : "Tamil" 
    } 

];

// console.log(fakerStudents);
// console.log(fakerDepartments);
// console.log(fakerCourse);

// const fakerDB = async() => {
//     await Student.deleteMany({});
//     await Student.insertMany(fakerStudents);
// }

// Student.insertMany(fakerStudents)
//     .then(function() {
//         console.log("Student Data inserted");
//         // mongoose.connection.close();
//     }).catch(function(error){
//         console.log(error)      // Failure
//         // mongoose.connection.close();
//     });

// Course.insertMany(fakerCourse)
//     .then(function() {
//         console.log("Course Data inserted");
//         // mongoose.connection.close();
//     }).catch(function(error){
//         console.log(error)      // Failure
//         // mongoose.connection.close();
//     });

// Department.insertMany(fakerDepartments)
//     .then(function() {
//         console.log("Department Data inserted");
//         // mongoose.connection.close();
//     }).catch(function(error){
//         console.log(error)      // Failure
//         // mongoose.connection.close();
//     });

(async function(){
    await Student.insertMany(fakerStudents)
    .then(function() {
        console.log("Student Data inserted");
        // mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        // mongoose.connection.close();
    });
    
    await Course.insertMany(fakerCourse)
    .then(function() {
        console.log("Course Data inserted");
        // mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        // mongoose.connection.close();
    });

    await Department.insertMany(fakerDepartments)
    .then(function() {
        console.log("Department Data inserted");
        // mongoose.connection.close();
    }).catch(function(error){
        console.log(error)      // Failure
        // mongoose.connection.close();
    });
    mongoose.connection.close();
})();
// mongoose.connection.close();
// test.then(() => {
//     test.disconnect();
// });

