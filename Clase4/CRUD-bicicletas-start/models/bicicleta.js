let Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return `Id: ${this.id}, color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici)
}

//Echa un par de biclas
let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.282847, -99.138879])
let b2 = new Bicicleta(1, 'rojo', 'bmx', [19.282447, -99.138079])

Bicicleta.add(b1)
Bicicleta.add(b2)

module.exports = Bicicleta