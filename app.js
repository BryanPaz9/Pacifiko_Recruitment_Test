'use strict'
const EXPRESS = require('express');
const APP = EXPRESS();
var employee_routes = require('./src/Routes/employeeRoutes');

APP.use((req,res,next )=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorisation, X-API-KEY, Origin, x-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
})

EXPRESS.urlencoded();
EXPRESS.json();

APP.use('/api/v1/',employee_routes);
module.exports = APP;