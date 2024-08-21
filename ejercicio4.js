/**EJERCICIO 4:
 * Crear una función que en base a 2 números enteros que ingrese el usuario, 
 * calcular cual número es el mayor y devolverlo. */


function numMayor(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "NINGUNO. LOS DOS NÚMEROS SON EXACTAMENTE IGUALES";
    }

}

let num1 = 1590;
let num2 = 100;
let numResultado = numMayor(num1, num2);
console.log("EL NÚMERO MAYOR ES: " + numResultado);
