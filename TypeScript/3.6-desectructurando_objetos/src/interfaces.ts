//----Interfaces------

//Interfaz alumno 
interface Alumno {
    nombre: string;
    apellidos: string;
    anio_nacimiento: number;
    nacionalidad:string;
    matricula: Matricula;
}

//Interfaz matricula
interface Matricula{
    modulos: string[];
    ciclo_formativo: string;
    centro_educativo: Centro;
}

//Interfaz centro
interface Centro{
    centro: string;
    localidad: string;
    codigo_centro: number;
    telefono: string;
}


//---Creamos primeros objetos-----
const centro1: Centro ={
    centro: "IES Belén",
    localidad: "Málaga",
    codigo_centro: 123,
    telefono: "12345678"
}

const matricula1:Matricula={
    modulos: ["Inglés profesional","Python","Desarrolllo interfaces"],
    ciclo_formativo: "2ºDAM",
    centro_educativo: centro1
}

const alumno1:Alumno ={
    nombre: "Pepito",
    apellidos: "Ole Ole",
    anio_nacimiento: 2007,
    nacionalidad: "Paraguayo",
    matricula: matricula1
}


//---Creamos segundos objetos-----
const centro2: Centro ={
    centro: "IES Playamar",
    localidad: "Torremolinos",
    codigo_centro: 213,
    telefono: "12345679"
}

const matricula2:Matricula={
    modulos: ["Programación","IPE1","Sostenibilidad"],
    ciclo_formativo: "1ºDAM",
    centro_educativo: centro2
}

const alumno2:Alumno ={
    nombre: "Aybek",
    apellidos: "Sultanov",
    anio_nacimiento: 2003,
    nacionalidad: "Kazajo",
    matricula: matricula2
}


//------------Mostramos por pantallas------------
console.log("")
console.log("---------------Primeros objetos------------")
console.table(alumno1);
console.table(matricula1);
console.table(centro1);

console.log("")
console.log("---------------Segundos objetos------------")
console.table(alumno2);
console.table(matricula2);
console.table(centro2);


console.log("")
console.log("---------------Desestructuación objetos------------")
const {nombre, apellidos} = alumno2;
console.log("Alumno: ",nombre,apellidos);

const {ciclo_formativo}=matricula2;
console.log("Ciclo formativo: ",ciclo_formativo);

const{centro} = centro2;
console.log("Centro: ",centro);

