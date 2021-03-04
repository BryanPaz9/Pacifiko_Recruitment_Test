'use strict'

var express = require("express");

const EmployeeController = require('../controllers/employee.controller');
var api = express.Router();
api.get('/employees',EmployeeController.listAll);
api.get('/employee/:id',EmployeeController.findById);
api.post('/create', EmployeeController.create);
api.get('/test', EmployeeController.test);

module.exports = api;