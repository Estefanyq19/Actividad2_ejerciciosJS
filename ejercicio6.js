/**EJERCICIO 6: 
 * Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
 * Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, 
 * si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.
 */

function calcularDesc(origen, destino) {
    let descDestino = 0;

    if (origen === 'Palma') {
        switch (destino) {
            case 'La costa del sol':
                descDestino = 5;
                break;
            case 'Panchimalco':
                descDestino = 10;
                break;
            case 'Puerto el Triunfo':
                descDestino = 15;
                break;
            default:
                descDestino = 0;
                return 'PARA ESTE DESTINO NO APLICA DESCUENTO';
        }
        return `EL DESCUENTO APLICADO A ESTE DESTINO ES DE: ${descDestino}%`;
    } else {
        return 'PARA ESTA CIUDAD DE ORIGEN NO APLICA DESCUENTO';
    }
}

const origen = 'Palma';
const destino = 'Cojutepeque';

const mensaje = calcularDesc(origen, destino);
console.log(mensaje);
