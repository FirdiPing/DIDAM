import type { Expediente } from './expediente.ts';

class Estudiante {
    nombre: string;
    apellidos: string;
    edad: number;
    localidad: string;
    expediente: Expediente;
    sexo?: string;


    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        localidad: string,
        expediente: Expediente,
        sexo?: string

    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.localidad = localidad;
        this.sexo = sexo;
        this.expediente = expediente;
    }
}

class Instituto {
    centro: string;
    localidad: string;
    estudiantes: Estudiante[];

    constructor(
        centro: string,
        localidad: string,
        estudiantes: Estudiante[]
    ) {
        this.centro = centro;
        this.localidad = localidad;
        this.estudiantes = estudiantes;
    }
}

// Crear dos estudiantes
const estudiante1 = new Estudiante(
    'Ana',
    'López García',
    17,
    'Málaga',
    {
        curso: '2º DAW',
        notaMedia: 8.5
    },
    'Femenino'

);

const estudiante2 = new Estudiante(
    'Carlos',
    'Ruiz Martín',
    18,
    'Torremolinos',
    {
        curso: '2º DAW',
        notaMedia: 7.8
    }
);

// Mostrar los datos de los estudiantes
console.log('ESTUDIANTE 1');
console.log(estudiante1);

console.log('ESTUDIANTE 2');
console.log(estudiante2);


// Crear una instancia de instituto
const instituto = new Instituto(
    'IES Mediterráneo',
    'Málaga',
    [estudiante1, estudiante2]
);

// Mostrar los datos del instituto
console.log('INSTITUTO');
console.log(instituto);

export{}