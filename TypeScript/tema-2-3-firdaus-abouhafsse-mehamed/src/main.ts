/**
* Autor: Firdaus Abouhafsse Mehamed
* Fecha: 09/11/2026
* Examen práctico DI - Temas 2 y 3
* Archivo: main.ts
*/
 
import {Estudiante} from "./personas.ts"
import { Direccion, Expediente, Centro } from './modelos.ts';
import {resumenEstudiante, calcularMedia,direccionPerosnal} from './operaciones.ts'

//3- Preparamos los datos

//3.1-Instanciamos un centro
const centro: Centro = new Centro(
  "IES Playamar",
  {
    calle:'calle1',
    localidad:'Torremolinos',
    provincia:'Malaga'
  }
) 

//3.2- Array de Estudiantes con dos estudiantes
//Estudiantes
const estudiante1: Estudiante= new Estudiante(
  "Ciclo1",
  ["Base de datos","Programacion"],
  [{curso: '1ºDAM', notaMedia:7.5},{curso: '2ºDAM', notaMedia:5.5}],
  centro,
  "Jose",
  "Oleole",
  25
);

const estudiante2: Estudiante= new Estudiante(
  "Ciclo2",
  ["Ingles","IPE II"],
  [{curso: '1ºDAW', notaMedia:8},{curso: '2ºDAW', notaMedia:9}],
  centro,
  "Firdaus",
  "Mehamed",
  27,
  "00000000",
  {
    calle:'calle1',
    localidad:'Torremolinos',
    provincia:'Malaga'
  }
);
console.log("-------------3-------------------")
let estudiantes: Estudiante[] =[estudiante1,estudiante2];
console.table(estudiantes);


//4-Probamos las funciones
console.log("-------------4-------------------")
console.log("Calcular media de 8 y 6 ", calcularMedia(8,6));
console.log("Calcular media de 8 ", calcularMedia(8));
console.log("Calcular media de 8 y 0 ", calcularMedia(8,0));

console.log("Funcion resumenEstudiante: ")
resumenEstudiante(estudiante1)


//5- Desestructuracion estudiante 2
console.log("-------------5-------------------")

let {nombre, apellidos} = estudiante2;

let primerModulo=estudiante2.modulos[0];

let segundoExp= estudiante2.expedientes[1]
let {curso, notaMedia} = segundoExp;

let direccionCentro=estudiante2.centro.direccion;
let{localidad} = direccionCentro

console.log("Nombres y apellido: ",nombre , apellidos);
console.log("Primer Modulo: ",primerModulo);
console.log("Curso : ",curso);
console.log("Nota media: ",notaMedia);
console.log("Localidad del centro: ",localidad);

//7-
console.log("-------------7-------------------")

direccionPerosnal(estudiante1);
direccionPerosnal(estudiante2)


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
`

