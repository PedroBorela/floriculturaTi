var express = require('express');
var router = express.Router();
var controllerPedido = require('../controller/controllerPedido.js')


router.get('/criaPedido', controllerPedido.criaPedido);


router.post('/cria',controllerPedido.criaPedido_post)



module.exports = router;