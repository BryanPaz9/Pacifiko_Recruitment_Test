'use strict'
const EXPRESS = require('express');
const APP = EXPRESS();
const BP = require('body-parser');
var employee_routes = require('./src/routes/employee.routes');

APP.use((req,res,next )=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorisation, X-API-KEY, Origin, x-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
})

APP.use(BP.json())
APP.use(BP.urlencoded({ extended: true }))

APP.use('/api/v1/',employee_routes);
module.exports = APP;