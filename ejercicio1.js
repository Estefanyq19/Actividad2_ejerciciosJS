/**EJERCICIO 1
 * Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. 
 * Utilizar para la condición el operador ternario. */

function verificandoEdad(edad){
    return edad >= 18 ? "USTED ES MAYOR DE EDAD" : "USTED ES MENOR DE EDAD";
}
console.log(verificandoEdad(56))//Desde áca se puede pobrar si la condición se esta cumpliendo.