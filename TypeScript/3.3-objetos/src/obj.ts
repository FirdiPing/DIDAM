// Interfaz para gestionar las fichas de los alumnos
interface Alumno {
    nombre: string;                    // Obligatorio
    apellidos: string;                 // Obligatorio
    nacionalidad: string;              // Obligatorio
    anioNacimiento: number;            // Obligatorio
    telefono: string;                  // Obligatorio
    correoElectronico: string;         // Obligatorio
    modulosProfesionales: string[];    // Obligatorio
    convalidaIPE: boolean;             // Obligatorio
    nivelPadel?: string;               // Opcional
    centroProcedencia?: string;        // Opcional
}

// Primera ficha de alumno
const alumno1: Alumno = {
    nombre: "Carlos",
    apellidos: "García López",
    nacionalidad: "Española",
    anioNacimiento: 2005,
    telefono: "600123456",
    correoElectronico: "carlos@gmail.com",
    modulosProfesionales: ["Programación", "Bases de datos", "Sistemas"],
    convalidaIPE: true,
    nivelPadel: "Intermedio",
    centroProcedencia: "IES Los Boliches"
};

// Segunda ficha de alumno
const alumno2: Alumno = {
    nombre: "Laura",
    apellidos: "Martínez Pérez",
    nacionalidad: "Española",
    anioNacimiento: 2006,
    telefono: "611234567",
    correoElectronico: "laura@gmail.com",
    modulosProfesionales: ["Programación", "Lenguajes de marcas", "IPE"],
    convalidaIPE: false
};

// Mostrar las fichas de los alumnos en una tabla por consola
console.table([alumno1, alumno2]);

export {};