var express = require('express');
var router = express.Router();
let bicicletaController = require('../controllers/bicicleta')

//Enlista biclas
router.get('/', bicicletaController.bicicleta_list);

//API
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);

module.exports = router;
