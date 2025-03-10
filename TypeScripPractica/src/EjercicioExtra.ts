/*En este ejercicio, crearás un tipo personalizado llamado "Profesor" que representará a un docente. 
El tipo "Profesor" extenderá el tipo "Persona", que contiene las propiedades básicas de una persona, como el nombre y la edad (usar interface o type).

El tipo "Profesor", contará con una propiedad llamada "subjects", que representa las materias que enseña (tipar), y otra propiedad llamada "yearsOfExperience"

Implementar una función que cree un profesor y lo pushee a un array.
Implementar una función que, dado el nombre de un profesor, actualice sus años de experiencia.
Implementar una función que agregue materias al profesor.

Ahora crearemos el tipo "Alumno", que extiende al tipo "Persona".
El tipo "Alumno", contará con las siguientes propiedades: DNI, subjects, faltas y profesor.

Implementar una función que cree un alumno y le agregue un profesor
Implementar una función que, dado el DNI de un alumno, devuelva sus faltas (Si tiene más de 20, devolver un texto mostrando que quedó libre).*/

interface Persona {
    nombre: string;
    edad: number;
}

interface Profesor extends Persona {
    subjects: string[];
    yearsOfExperience: number;
}

interface Alumno extends Persona {
    DNI: number;
    subjects: string[];
    faltas: number;
    profesores: string[];
}

const profesores: Profesor[] = [];
const alumnos: Alumno[] = [];


function crearProfesor(nombre : string, edad: number,  subjects: string[], yearsOfExperience: number ):Profesor {
    const profesor: Profesor = {
        nombre,
        edad,
        subjects,
        yearsOfExperience
    };    
    profesores.push(profesor);
    return profesor;
}

function actualizarAñosDeExperiencia(nombre: string, años: number):void {
    const profesor = profesores.find(profesor => profesor.nombre === nombre);
    if (profesor) {
        profesor.yearsOfExperience = años;
        console.log("Años de experiencia actualizados para el profesor "+profesor.nombre);
    }
    else {
        console.log("Profesor no encontrado");}
}

function agregarMaterias(nombre: string, materias: string[]):void {
    const profesor = profesores.find(profesor => profesor.nombre === nombre);
    if (profesor) {
        profesor.subjects.push(...materias);
        
    }
}

function crearAlumno(nombre: string, edad: number, DNI: number, subjects: string[], faltas: number, profesor: string) {
    const alumno: Alumno = {
        nombre,
        edad,
        DNI,
        subjects,
        faltas,
        profesores: [profesor]
    };
    alumnos.push(alumno);
}

function obtenerFaltas(DNI: number): string {
    const alumno = alumnos.find(alumno => alumno.DNI === DNI);

    if (alumno) {
        if (alumno.faltas > 20) {
            return "El alumno "+ alumno.nombre+" con dni:"+alumno.DNI+  " quedó libre";
        }
        return alumno.faltas.toString();
    }
    return "Alumno no encontrado";
}

function agregarProfesorAlumno(DNI: number, nombreProfesor: string) {
    const alumno = alumnos.find(alumno => alumno.DNI === DNI);
    const profesor = profesores.find(profesor => profesor.nombre === nombreProfesor);
    if (alumno && profesor) {
        alumno.profesores.push(nombreProfesor);
    }
}

function eliminarProfesorAlumno(DNI: number, nombreProfesor: string) {
    const alumno = alumnos.find(alumno => alumno.DNI === DNI);
    if (alumno) {
        const index = alumno.profesores.indexOf(nombreProfesor);
        if (index !== -1) {
            alumno.profesores.splice(index, 1);
        }
    }
}

crearProfesor("Alice", 30, ["Matemáticas", "Física"], 5);
crearProfesor("Bob", 35, ["Historia", "Geografía"], 10);

crearAlumno("Charlie", 15, 123456, ["Matemáticas", "Física"], 25, "Alice");
crearAlumno("David", 16, 654321, ["Historia", "Geografía"], 15, "Bob");

console.log("Antes de los cambios");
console.table(profesores);
console.table(alumnos);

actualizarAñosDeExperiencia("Alice", 6);
agregarMaterias("Bob", ["Inglés", "Francés"]);
agregarProfesorAlumno(123456, "Bob");
eliminarProfesorAlumno(654321, "Bob");

console.log("Después de los cambios");
console.table(profesores);
console.table(alumnos);
console.log(obtenerFaltas(123456)); // 25

