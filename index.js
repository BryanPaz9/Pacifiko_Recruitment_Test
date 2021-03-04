'use strict'

const APP = require('./app');
const PORT = 3000;
const MONGOOSE = require('mongoose');
MONGOOSE.Promise = global.Promise;
MONGOOSE.set('useUnifiedTopology', true);
MONGOOSE.createConnection('mongodb://localhost:27017/Pacifiko_Recruit_Test',{useNewUrlParser:true})
    .then(()=>{
        console.log('Connection of Pacifiko_Recruit_Test DB was sucessful');
        //Server
        APP.listen(PORT,()=>{
            console.log('Server is running on port: '+ PORT);
        });
    })
    .catch(err => console.log(err));
