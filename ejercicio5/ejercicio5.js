/**EJERCICIO 5: 
 * Realizar una función para una tienda de coches en donde se deberá calcular: 
 * Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra.
 * Si el coche a la venta es un FORD FOCUS, el descuento será del 10%
 * y si es un FORD ESCAPE el descuento será del 20%. 
 * Mostrar en html el coche seleccionado y el descuento que se aplicara 
 * en base a lo que selecciono el usuario.
 */

function calculoDesc() {
    let coche = document.getElementById("coche").value;
    let descuento = 0;

    if (coche === "FORD FIESTA") {
        descuento = 5;
    } else if (coche === "FORD FOCUS") {
        descuento = 10;
    } else if (coche === "FORD ESCAPE") {
        descuento = 20;
    }

    let resultado = `EL COCHE SELECCIONADO ES: ${coche}<br>EL DESCUENTO APLICADO ES: ${descuento}%`;
    document.getElementById("resultado").innerHTML = resultado;
}
