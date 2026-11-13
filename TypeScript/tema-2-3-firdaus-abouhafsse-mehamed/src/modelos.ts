/**
* Autor: Firdaus Abouhafsse Mehamed
* Fecha: 09/11/2026
* Examen práctico DI - Temas 2 y 3
* Archivo: modelos.ts
*/
 
//1- Creamos las interfaces 
export interface Direccion {
    calle: string;
    localidad: string;
    provincia:string;
}

export interface Expediente {
    curso: string;
    notaMedia: number;
}


//2- Clase centro con atributos inicializados
export class Centro {
    constructor(
        public nombre:string,
        public direccion: Direccion,
    ){
        this.nombre='IES Playamar',
        this.direccion=direccion
    };
}