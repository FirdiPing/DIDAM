import {
   type Alumno,
   type Ensenanza,
   type Instituto,
   matricularAlumno,
   mostrarAlumnos,
   mostrarDireccionInstituto
} from './t9modulo-instituto.ts';


const daw: Ensenanza = {
   nivel: 'DAW',
   obligatoria: false,
   familiaProfesional: 'Informática y Comunicaciones',
   modalidad: 'Mañana'
};


const eso: Ensenanza = {
   nivel: 'ESO',
   obligatoria: true,
   modalidad: 'Tarde'
};


const asir: Ensenanza = {
   nivel: 'ASIR',
   obligatoria: false,
   familiaProfesional: 'Informática y Comunicaciones',
   modalidad: 'Telemático'
};


const alumno1: Alumno = {
   nombre: 'Lucía',
   edad: 20,
   sexo: 'Mujer',
   ensenanza: daw,
   direccion: {
       calle: 'Calle del Sol, 12',
       cp: '29620',
       localidad: 'Torremolinos',
       provincia: 'Málaga'
   }
};


const alumno2: Alumno = {
   nombre: 'Pablo',
   edad: 15,
   sexo: 'Hombre',
   ensenanza: eso,
   direccion: {
       calle: 'Avenida Andalucía, 8',
       cp: '29007',
       localidad: 'Málaga',
       provincia: 'Málaga'
   }
};


const instituto: Instituto = {
   nombre: 'IES Playamar',
   director: 'Antonio López',
   telefono: '952000000',
   correo: 'info@iesplayamar.es',
   direccion: {
       calle: 'Calle del Instituto, 1',
       cp: '29620',
       localidad: 'Torremolinos',
       provincia: 'Málaga'
   },
   alumnos: []
};


matricularAlumno(instituto, alumno1, daw);
matricularAlumno(instituto, alumno2, eso);


console.log('Alumnos matriculados:');
mostrarAlumnos(instituto);


console.log('Dirección del instituto:');
mostrarDireccionInstituto(instituto);


console.log('Tercera enseñanza:', asir.nivel);
