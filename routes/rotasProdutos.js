var express = require('express');
var router = express.Router();
var controllerProdutos = require('../controller/controllerProdutos.js')



router.get('/', controllerProdutos.carregaProdutos);

module.exports = router;