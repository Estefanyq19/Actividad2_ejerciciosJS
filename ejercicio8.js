/**EJERCICIO 8:
 * Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario*/


function tablaMultiplicacion(num) {
    console.log(`TABLA DEL ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
const numIngresar = 9;
tablaMultiplicacion(numIngresar);
