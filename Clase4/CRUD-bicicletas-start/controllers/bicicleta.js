const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function (req,res) {
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function (req,res) {
    let temp_bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    temp_bici.ubicacion = [req.body.lat, req.body.lon]
    Bicicleta.add(temp_bici)
    res.redirect('/bicicletas')
}