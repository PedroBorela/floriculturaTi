var express = require('express');
var router = express.Router();
var controllerInicio = require('../controller/controllerInicio.js')

/* GET home page. */
router.get('/', controllerInicio.paginaInicial);

module.exports = router;
