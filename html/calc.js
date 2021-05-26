const { Router } = require('express');
const router = new Router();
const { evaluate } = require('mathjs');

router.post('/', (request, response) => { // method post from express
  const { body } = request                //extract body from request
  let jsonResponse = {                    //object variable for the result
    resultado: '',
  }
  console.log(body)
  jsonResponse.resultado = evaluate(body.expresion);  //evaluates expression with mathjs and asigns it to the object
  console.log(jsonResponse)
  response.send(jsonResponse);          //sends the result 
})

module.exports = router;