import { Persona } from "./08-clases-extender";

// export class Heroe {

//     public persona: Persona;

//     constructor(
//         public apodo: string,
//         public edad: number,
//         public nombreReal: string
//     ){
//         this.persona = new Persona(nombreReal, 'La Tierra', edad);
//     }
// }


export class Heroe {


    constructor(
        public apodo: string,
        public edad: number,
        public nombreReal: string,
        public persona: Persona

    ){
    }
}

const kakarot = new Persona('Kakarot', 'La Tierra', 26,178);
const goku = new Heroe('Goku',26,'Kakarot',kakarot);

console.log(goku);