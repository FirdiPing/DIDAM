export class Persona{
    constructor(
        public nombre: string,
        public direccion: string,
        public edad: number,
        public altura?: number
    ){

    };
}

export class Heroe extends Persona{
    constructor(
        public apodo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal,'La Tierra',edad);
    };
}

const goku = new Heroe('Goku',26,'Kakarot');
console.log(goku);