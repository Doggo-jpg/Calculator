const express = require('express');
const morgan = require('morgan'); 
const app = express();
const path = require('path');


app.set('port', 3000);
app.use(express.static(path.join(__dirname, "html")));
app.use(morgan('dev')); 
app.use(express.json()); 

app.use('/', require('./html'));
app.use('/api/calc', require('./html/calc'));

app.listen(app.get('port'), () => {
  console.log(`Server runnig on port ${app.get('port')}`);
})


