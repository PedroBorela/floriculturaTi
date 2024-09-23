var express = require('express');
var router = express.Router();
var controllerRetirada = require('../controller/controllerRetirada.js')



router.get('/criaRetirada', controllerRetirada.criaRetirada);

router.post('/cria',controllerRetirada.criaRetirada_post);

router.get('/alteraRetirada/:codigo',controllerRetirada.altera_get);

router.post('/alteraRetirada/:codigo',controllerRetirada.altera_post);

router.get('/deleta/:codigo',controllerRetirada.deleta);

module.exports = router;