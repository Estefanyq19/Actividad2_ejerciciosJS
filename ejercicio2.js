/**EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
Examen = 20%
tareas = 40%
asistencia = 10%
investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

//evExamen -> las letras "ev" hacen referencia a la evaluación "Evaluación examen"
function notafinalAlumno(alumno, carnet, evExamen, evTareas, evAsistencia, EvInvestigación){
    //defininiendo lo siguiente como constante, ya que su valor no cambiará y es lo que ya esta estipulado que valdra cada evaluación

    const EXAMEN = 0.20;
    const TAREAS = 0.40;
    const ASISTENCIA = 0.10;
    const INVESTIGACION = 0.30;

    //Proceso para calcular la nota final

    let notaFinal = (evExamen*EXAMEN)+(evTareas*TAREAS)+(evAsistencia*ASISTENCIA)+(EvInvestigación*INVESTIGACION);

    //Mostrando solamente nombre, carnet y nota final del alumno
    console.log(`EL NOMBRE DEL/LA ALUMNO/A ES: ${alumno}`);
    console.log(`EL NÚMERO DE CARNET ES: ${carnet}`);
    console.log(`LA NOTA FINAL DEL/LA ALUMNO/A ES: ${notaFinal.toFixed(2)}`);
}

notafinalAlumno("Estefany", "2519k32", 7.5, 10, 9.5, 8.82);

