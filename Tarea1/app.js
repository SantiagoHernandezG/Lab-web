const prompt = require('prompt-sync')();
const mateBasica = require('./mate')
const readline = require("readline").createInterface({
    input: process.stdin,
    otuptu: process.stdout
});
let opp = 1
salir:
while(opp != 6){
    console.log('*************OPERACIONES***************')
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicacion');
    console.log('4. Division');
    console.log('5. Modulo');
    console.log('6. Salir');
    opp = prompt('Elija operacion ')
    console.log(' ');

    if(opp == 6){
        console.log('Saliending...');
        break salir;
    }

    const num1 = prompt('Numero 1: ')
    const num2 = prompt('Numero 2: ')
    switch (opp) {
        case "1":
            console.log('Suma '+mateBasica.suma(parseInt(num1),parseInt(num2)))
            break;
        case "2":
            console.log(mateBasica.resta(parseInt(num1),parseInt(num2)))
            break;
        case "3":
            console.log(mateBasica.producto(parseInt(num1),parseInt(num2)))
            break;
        case "4":
            console.log(mateBasica.division(parseInt(num1),parseInt(num2)))
            break;
        case "5":
            console.log(mateBasica.modulo(parseInt(num1),parseInt(num2)))
            break;
        default:
            console.log('Opcion no valida');
            break salir;
    }
}