var express = require('express');
var router = express.Router();
var controllerInicio = require('../controller/controllerInicio.js')

/* GET home page. */
router.get('/', controllerInicio.paginaInicial);
router.get('/consulta', controllerInicio.paginaConsulta);

module.exports = router;
