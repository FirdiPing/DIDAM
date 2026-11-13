
//Clase dirección
interface Direccion {
    calle: string,
    cp: string,
    localidad: string,
    provincia: string
}

//Clase persona
class Persona{
    constructor(
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public direccion?: Direccion
    ){}
}

//Clase jugador
class Jugador extends Persona{   
    constructor  (
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public categoria: 1|2|3|4|5|6,
        public direccion?: Direccion


    ){
        super(nombre, apellidos, genero, telefono, direccion)
        this.categoria = categoria;
    }
}

//Clase arbitros
export class Arbitro extends Persona{
        constructor  (
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public numero_colegiado: number,
        public direccion?: Direccion

    ){
        super(nombre, apellidos, genero, telefono, direccion)
        this.numero_colegiado = numero_colegiado;
    }


}

//Clase equipo
export class Equipo{
    constructor(
        public jugador1: Jugador,
        public jugador2: Jugador
    )
    {}

}

//Clase partido
export class Partido{
    constructor(
        public equipo1: Equipo,
        public fecha: string,
        public hora: string,
        public recinto: string,
        public pista: string,
        public arbitro: Arbitro,
        public equipo2?: Equipo,
    ){};
}


const j1 = new Jugador(
    "Juan",
    "Pérez López",
    "Masculino",
    "600123456",
    1
);

const j2 = new Jugador(
    "María",
    "García Sánchez",
    "Femenino",
    "600234567",
    2,
        {
        calle: "Calle Real, 15",
        cp: "29002",
        localidad: "Málaga",
        provincia: "Málaga"
    }
);

const j3 = new Jugador(
    "Pedro",
    "Martínez Ruiz",
    "Masculino",
    "600345678",
    3,
    {
        calle: "Avenida Andalucía, 20",
        cp: "29003",
        localidad: "Sevilla",
        provincia: "Sevilla"
    }
);

const j4 = new Jugador(
    "Lucía",
    "Fernández Gómez",
    "Femenino",
    "600456789",
    4,
        {
        calle: "Calle Granada, 25",
        cp: "18001",
        localidad: "Granada",
        provincia: "Granada"
    }
);

//Creamos tres equipos
const firdi = new Equipo(j1, j2);
const idrif = new Equipo(j3, j4);
const whop = new Equipo(j1, j4);

//Creamos dos arbitros
const a1 = new Arbitro(
    "Carlos",
    "López Martín",
    "Masculino",
    "600111222",
    1001,
        {
        calle: "Calle Mayor, 12",
        cp: "29001",
        localidad: "Málaga",
        provincia: "Málaga"
    }
);

const a2 = new Arbitro(
    "Laura",
    "Sánchez Ruiz",
    "Femenino",
    "600333444",
    1002
);

//Creamos tres partidos para el calendario
const partido1 = new Partido(
    firdi,
    "2026-11-15",
    "10:00",
    "Polideportivo Municipal",
    "Pista 1",
    a1,
    idrif
);

const partido2 = new Partido(
    idrif,
    "2026-11-16",
    "12:00",
    "Polideportivo Municipal",
    "Pista 2",
    a2
);

const partido3 = new Partido(
    firdi,
    "2026-11-17",
    "17:00",
    "Club Deportivo Málaga",
    "Pista 3",
    a1,
    whop,

);

const calendario: Partido[] = [partido1,partido2,partido3];

//Mostramos
//Mostramos
function mostrarCalendario(array: Partido[]){
  for (let i = 0; i < array.length; i++) {
    console.log("Partido" + i);
    console.log("Emparejamiento: ",array[i].equipo1,"vs",array[i].equipo2 || "Sin rival");
    console.log("Fecha: ",array[i].fecha);
    console.log("Arbitro: ",array[i].arbitro, "-", array[i].arbitro.direccion?.calle || "Sin dirección");
    console.log("--------------------------");
  }
}

console.log("----------Calendario:-------------")
mostrarCalendario(calendario)


console.log("----------Calendario:-------------")
mostrarCalendario(calendario)



