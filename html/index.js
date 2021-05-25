const { Router } = require('express');
const router = new Router();

router.get('/', (request, response) => {
  response.render("index");
})

module.exports = router;
