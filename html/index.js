const express = require('express');
const morgan = require('morgan'); 
const app = express();
const path = require('path');


app.set('port', 3000);              //sets port 
app.use(express.static(__dirname)); //adds main folder as static
app.use(morgan('dev'));             //uses morgan for logs
app.use(express.json());            //allows for jsons

app.use('/api/calc', require('./calc')); //routes calc.js to use as my api

app.set("views", __dirname);            //sets my main view (index.html)
app.listen(app.get('port'), () => {     //starts listening on port
  console.log(`Server runnig on port ${app.get('port')}`);
})


