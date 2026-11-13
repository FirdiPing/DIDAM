// Array de strings
let habilidades = ['Velocidad', 'Magia', 'Curación'];

// Array de strings, boolean y números
let habilidades2 = ['Velocidad', 'Magia', 'Curación', true, 123];

// Mejor si lo definimos
let habilidades3: string[] = ['Velocidad', 'Magia', 'Curación'];

// Esto dará error
//let habilidadesX: string[] = ['Velocidad', 'Magia', 'Curación', true, 123];

// TS no nos permite tipar los valores de un objeto
// Sino va a cambiar, mejor utilizar constantes, ocupa menos y nos avisa si lo cambiamos
const personaje = {
    nombre: 'Goku',
    pv: 100,
    habilidades: ['Fuerza', 'Velocidad']
};

// Para ello utilizamos interfaces
interface Personaje {
    nombre: string;
    pv: number;
    habilidades: string[];
    procedencia?: string; // opcional
}

const saiyan: Personaje = {
    nombre: "Goku",
    pv: 100,
    habilidades: ["Superguerrero", "Bonsadoso"],
    procedencia: "La Tierra"
}

saiyan.procedencia = "Namek";

console.table(saiyan);