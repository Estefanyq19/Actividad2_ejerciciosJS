/**EJERCICIO 3:
 * CATEGORIA AUMENTO 
 *    A        15%
 *    B        30%
 *    C        10%
 *    D        20% 
 * 
 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
 * Para este ejercicio deberá de asignar las siguientes variables: 
 * nombre, salario, categoría y aumento. 
 * Deberá demostrar los datos del empleado y el aumento salarial. 
*/

//realizando la función para calcular el aumento en base a la tabla de categorias
//las letras "Emp" en las variables hacen referencia a empleado, ej: Nombre del empleado

// Definiendo e inicializando las variables
let nombreEmp = "Estefany Quezada";
let salarioEmp = 680;
let categoria = "D";

function calcularAumento(nombreEmp, salarioEmp, categoria) {
    let aumento = 0;

    if (categoria === "A") {
        aumento = 15;
    } else if (categoria === "B") {
        aumento = 30;
    } else if (categoria === "C") {
        aumento = 10;
    } else if (categoria === "D") {
        aumento = 20;
    } else {
        console.log("LA CATEGORIA QUE INGRESO NO ES VÁLIDA");
        return;
    }

    let totalAumento = salarioEmp + (salarioEmp * aumento / 100);

    console.log("EL NOMBRE DEL EMPLEADO ES: " + nombreEmp);
    console.log("EL SALARIO ACTUAL DEL EMPLEADO ES DE: $" + salarioEmp);
    console.log("EL EMPLEADO APLICO A LA CATERIA: " + categoria);
    console.log("LA CUAL OFRECE UN AUMENTO DEL: " + aumento + "%");
    console.log("EL SALARIO MENSUAL APLICANDO EL AUMENTO DEL EMPLEADO ES DE: $" + totalAumento.toFixed(2));
}
calcularAumento(nombreEmp, salarioEmp, categoria);
