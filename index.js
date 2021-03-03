'use strict'

const APP = require('./app');
const PORT = 3000;

function start() {
    APP.set('port',process.env.PORT || PORT);
    APP.listen(APP.get('port'),()=>{
        console.log(`Server is running in port: '${APP.get('port')}'`);
        console.log('Version 1.0.0');
    })
}
start();