/**
* Autor: Firdaus Abouhafsse Mehamed
* Fecha: 09/11/2026
* Examen práctico DI - Temas 2 y 3
* Archivo: personas.ts
*/

import { Direccion, Expediente, Centro } from './modelos.ts';
 
//2- Creamos las otras clases
class Persona {
    constructor(
        public nombre:string,
        public apellidos: string,
        public edad: number,
        public telefono?:string,
        public direccion?:Direccion

    ){

    };
}

export class Estudiante extends Persona{
    constructor(
        public ciclo:string,
        public modulos: string[],
        public expedientes: Expediente[],
        public centro: Centro,
        public nombre:string,
        public apellidos: string,
        public edad: number,
        public telefono?:string,
        public direccion?:Direccion

    ){
        super(nombre,apellidos,edad,telefono,direccion);
        this.ciclo=ciclo;
        this.modulos=modulos;
        this.expedientes=expedientes;
        this.centro=centro;
    };

}

//Estudiante es una herencia de persona ya que Estudiante ES una Persona, y usamos la composición con centro porque Estudiante Tiene un Centro

export{}