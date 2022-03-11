var express = require('express');
var router = express.Router();
let bicicletaController = require('../controllers/bicicleta')

//Enlista biclas
router.get('/', bicicletaController.bicicleta_list);

module.exports = router;
