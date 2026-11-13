/**
* Autor: Firdaus Abouhafsse Mehamed
* Fecha: 09/11/2026
* Examen práctico DI - Temas 2 y 3
* Archivo: operaciones.ts
*/

import { Estudiante } from "./personas";

//4- Creamos las funciones
export function calcularMedia(a:number,b?:number):number {
    if(b != undefined){
        return (a+b)/2;
    }else{
        return a; 
    }
}

export function resumenEstudiante(e:Estudiante) {
    let {nombre, apellidos, ciclo} = e;
    let{nombre:nombreCentro} = e.centro;

    console.log(nombre,apellidos,"-",ciclo,"-",nombreCentro);
}


//7- Direccion opcional
export function direccionPerosnal(e:Estudiante) {
    let {nombre} = e;
    console.log(nombre,"-",e.direccion?.localidad||"Sin direccion");
}