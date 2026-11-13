
//------------- Creamos las interfaces necesarias ---------------
interface Alumno {
    nombre: string;
    apellidos: string;
    modulos: string[];
    expedientes: Expediente[];
}

// Interfaz expediente
interface Expediente {
    curso: string;
    notaMedia: number;
}

//----------- Creamos a los alumnos --------------
// Alumno 1
const alumno1: Alumno = {
    nombre: "Pepito",
    apellidos: "Ole Ole",
    modulos: ["Inglés profesional", "Python", "Desarrollo interfaces"],
    expedientes: [
        {
            curso: "1ºDAM",
            notaMedia: 7.5
        },
        {
            curso: "2ºDAM",
            notaMedia: 8.5
        }
    ]
};

// Alumno 2
const alumno2: Alumno = {
    nombre: "Aybek",
    apellidos: "Sultanov",
    modulos: ["Programación", "IPE1", "Sostenibilidad"],
    expedientes: [
        {
            curso: "2ºDAM",
            notaMedia: 9.5
        },
        {
            curso: "1ºDAM",
            notaMedia: 2.3
        }
    ]
};

// Alumno 3
const alumno3: Alumno = {
    nombre: "Juan",
    apellidos: "Pérez",
    modulos: ["Bases de datos", "Programación"],
    expedientes: [
        {
            curso: "1ºDAM",
            notaMedia: 8.2
        }
    ]
};

//----------- Creamos el listado --------------
const listado: Alumno[] = [alumno1, alumno2, alumno3];

//----------- Desestructuración de arrays --------------
const [, a2] = listado;

console.log("");
console.log("--------------- Desestructuración objetos ------------");

//----------- Desestructuración del objeto alumno --------------
const { nombre, apellidos } = a2;
console.log("Alumno:", nombre, apellidos);

//----------- Desestructuración del array de módulos --------------
const [primerModulo] = a2.modulos;
console.log("Primer módulo:", primerModulo);

//----------- Desestructuración del array de expedientes --------------
const [, segundaEntrada] = a2.expedientes;

//----------- Desestructuración del objeto expediente --------------
const { curso, notaMedia } = segundaEntrada;

console.log("Curso:", curso);
console.log("Nota media:", notaMedia);
