var express = require('express');
var router = express.Router();
var controllerPedido = require('../controller/controllerPedido.js')


router.get('/criaPedido', controllerPedido.criaPedido);


router.post('/cria',controllerPedido.criaPedido_post);

router.get('/alteraPedido/:codigo',controllerPedido.altera_get);

router.post('/alteraPedido/:codigo',controllerPedido.altera_post);

router.get('/deleta/:codigo',controllerPedido.deleta);




module.exports = router;