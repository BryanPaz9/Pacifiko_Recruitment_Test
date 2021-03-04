'use strict'
  
const MONGOOSE =  require("mongoose");
const APP = require("./app");
const PORT = 3000;

MONGOOSE.Promise = global.Promise
MONGOOSE.connect('mongodb://localhost:27017/Pacifiko_Recruit_Test', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Connection of Pacifiko_Recruit_Test DB was sucessful');

    APP.listen(PORT, function () {
        console.log('Server is running on port: '+ PORT);
    })
}).catch(err => console.log(err))
