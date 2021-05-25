const express = require('express');
const morgan = require('morgan'); 
const app = express();
const path = require('path');


app.set('port', 3000);
app.use(express.static(__dirname));
app.use(morgan('dev')); 
app.use(express.json()); 

app.use('/api/calc', require('./calc'));

app.set("views", __dirname);
app.listen(app.get('port'), () => {
  console.log(`Server runnig on port ${app.get('port')}`);
})


