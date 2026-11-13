export class Persona{
    public nombre: string;
    public direccion: string;
    public altura?: number;
    public edad: number;


    constructor(){
        this.nombre = 'Antonio';
        this.direccion='Torremolinos'
        this.edad = 49;
    };
}


const profe = new Persona();
console.log(profe);
console.log(profe.edad);