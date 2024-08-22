/**EJERCICIO 9:
 * Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, 
 * una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
 * • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
 * • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
 * • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
 * • Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

function conversion(celsius) {
    return (celsius * 9/5) + 32;
}

function evTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        console.log("TIENE UNA TEMPERATURA BAJA");
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        console.log("TIENE UNA TEMPERATURA ADECUADA");
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        console.log("TIENE UNA TEMPERATURA ALTA");
    } else {
        console.log("TIENE UNA TEMPERATURA DESCONOCIDA");
    }
}

const tempCelsius = 29;
const tempFahrenheit = conversion(tempCelsius);

console.log(`SU TEMPERATURA ES DE: ${tempFahrenheit}°F`);
evTemperatura(tempFahrenheit);
