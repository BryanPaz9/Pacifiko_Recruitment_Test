'use strict'

const MONGOOSE = require('mongoose');
var Schema = MONGOOSE.Schema;

var employeeSchema = Schema({
    id: Number,
    employee_name: String,
    employee_salary: Number,
    employee_age: Number,
    profile_image: String
});

module.exports = MONGOOSE.model('Employee', employeeSchema);