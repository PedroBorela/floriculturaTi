var express = require('express');
var router = express.Router();
var controllerRetirada = require('../controller/controllerRetirada.js')



router.get('/criaRetirada', controllerRetirada.criaRetirada);

router.post('/cria',controllerRetirada.criaRetirada_post);

module.exports = router;