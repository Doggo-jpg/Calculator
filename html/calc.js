const { Router, json } = require('express');
const router = new Router();
const { evaluate } = require('mathjs');

router.post('/', (request, response) => {
  const { body } = request
  let jsonResponse = {
    resultado: '',
  }
  console.log(body)
  jsonResponse.resultado = evaluate(body.expresion);
  console.log(jsonResponse)
  response.send(jsonResponse);
})

module.exports = router;