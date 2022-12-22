const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');




// const dept_id_scis = mongoose.Types.ObjectId();
// const dept_id_ls = mongoose.Types.ObjectId();
// const dept_id_sop = mongoose.Types.ObjectId();
// const dept_id_soc = mongoose.Types.ObjectId();
// const dept_id_soac = mongoose.Types.ObjectId();
// const dept_id_som = mongoose.Types.ObjectId();
// const dept_id_soman = mongoose.Types.ObjectId();
// const dept_id_lit = mongoose.Types.ObjectId();

const dept_id_scis = 101;
const dept_id_ls = 102;
const dept_id_sop = 103;
const dept_id_soc = 104;
const dept_id_soac = 105;
const dept_id_som = 106;
const dept_id_soman = 107;
const dept_id_lit = 108;



module.exports = Object.freeze({
    dept_id_scis,
    dept_id_ls,
    dept_id_sop, 
    dept_id_soc,
    dept_id_soac,
    dept_id_som,
    dept_id_soman,
    dept_id_lit
});
