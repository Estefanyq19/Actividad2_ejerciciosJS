/**EJERCICIO 7:
 * Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
 * • La cantidad de valores negativos ingresados.
 * •La cantidad de valores positivos ingresados.
 * •La cantidad de múltiplos de 15.
 * •El valor acumulado de los números ingresados que son pares. */


const cargaValores = [-2,56,5,89,-55,45,0,356,-487,94];

let cantNegativos = 0;
let cantPositivos = 0;
let cantMultiplos = 0;
let valorAcum = 0;

for (let i = 0; i < cargaValores.length; i++){

    const valor = cargaValores[i];

    if (valor < 0) {
        cantNegativos++;
    }
    if (valor > 0) {
        cantPositivos++;
    }
    if (valor % 15 === 0 && valor !== 0) {
        cantMultiplos++;
    }
    if (valor % 2 === 0) {
        valorAcum += valor;
    }
}

console.log(`LA CANTIDAD DE VALORES NEGATIVOS ES: ${cantNegativos}`);
console.log(`LA CANTIDAD DE VALORES POSITIVOS ES: ${cantPositivos}`);
console.log(`LA CANTIDAD DE MÚLTIPLOS DE 15 ES: ${cantMultiplos}`);
console.log(`EL VALOR ACUMULADO DE TODOS LOS NÚMEROS PARES ES DE: ${valorAcum}`);
