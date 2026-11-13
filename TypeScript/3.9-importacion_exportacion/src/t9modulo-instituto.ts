export interface Direccion {
   calle: string;
   cp: string;
   localidad: string;
   provincia: string;
}


export interface Ensenanza {
   nivel: string;
   obligatoria: boolean;
   familiaProfesional?: string;
   modalidad: string;
}


export interface Alumno {
   nombre: string;
   edad: number;
   sexo: string;
   ensenanza: Ensenanza;
   direccion: Direccion;
}


export interface Instituto {
   nombre: string;
   director: string;
   telefono: string;
   correo: string;
   direccion: Direccion;
   alumnos: Alumno[];
}


export function matricularAlumno(
   instituto: Instituto,
   alumno: Alumno,
   ensenanza: Ensenanza
): void {
   instituto.alumnos.push({
       ...alumno,
       ensenanza
   });
}


export function mostrarAlumnos({ alumnos }: Instituto): void {
   alumnos.forEach(({ nombre, ensenanza: { nivel }, direccion: { localidad } }) => {
       console.log(`Alumno: ${nombre}, Nivel: ${nivel}, Localidad: ${localidad}`);
   });
}


export function mostrarDireccionInstituto({
   direccion: { calle, cp, localidad, provincia }
}: Instituto): void {
   console.log(`${calle}, ${cp}, ${localidad}, ${provincia}`);
}
