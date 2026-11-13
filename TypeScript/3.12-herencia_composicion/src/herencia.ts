
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
        public direccion: Direccion
    ){}
}

//Clase jugador
class Jugador extends Persona{   
    constructor  (
        public nombre: string,
        public apellidos: string,
        public genero: string,
        public telefono: string,
        public direccion: Direccion,
        public categoria: 1|2|3|4|5|6

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
        public direccion: Direccion,
        public numero_colegiado: number

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
        public equipo2: Equipo,
        public fecha: string,
        public hora: string,
        public recinto: string,
        public pista: string,
        public arbitro: Arbitro,
    ){};
}


const j1 = new Jugador(
    "Juan",
    "Pérez López",
    "Masculino",
    "600123456",
    {
        calle: "Calle Mayor, 10",
        cp: "29001",
        localidad: "Málaga",
        provincia: "Málaga"
    },
    1
);

const j2 = new Jugador(
    "María",
    "García Sánchez",
    "Femenino",
    "600234567",
    {
        calle: "Calle Real, 15",
        cp: "29002",
        localidad: "Málaga",
        provincia: "Málaga"
    },
    2
);

const j3 = new Jugador(
    "Pedro",
    "Martínez Ruiz",
    "Masculino",
    "600345678",
    {
        calle: "Avenida Andalucía, 20",
        cp: "29003",
        localidad: "Sevilla",
        provincia: "Sevilla"
    },
    3
);

const j4 = new Jugador(
    "Lucía",
    "Fernández Gómez",
    "Femenino",
    "600456789",
    {
        calle: "Calle Granada, 25",
        cp: "18001",
        localidad: "Granada",
        provincia: "Granada"
    },
    4
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
    {
        calle: "Calle Mayor, 12",
        cp: "29001",
        localidad: "Málaga",
        provincia: "Málaga"
    },
    1001
);

const a2 = new Arbitro(
    "Laura",
    "Sánchez Ruiz",
    "Femenino",
    "600333444",
    {
        calle: "Avenida Andalucía, 25",
        cp: "41001",
        localidad: "Sevilla",
        provincia: "Sevilla"
    },
    1002
);

//Creamos tres partidos para el calendario
const partido1 = new Partido(
    firdi,
    idrif,
    "2026-11-15",
    "10:00",
    "Polideportivo Municipal",
    "Pista 1",
    a1
);

const partido2 = new Partido(
    idrif,
    whop,
    "2026-11-16",
    "12:00",
    "Polideportivo Municipal",
    "Pista 2",
    a2
);

const partido3 = new Partido(
    firdi,
    whop,
    "2026-11-17",
    "17:00",
    "Club Deportivo Málaga",
    "Pista 3",
    a1
);

const calendario: Partido[] = [partido1,partido2,partido3];

//Mostramos
console.log("----------Equipos:-------------")
console.log(firdi)
console.log(idrif)
console.log(whop)

console.log("----------Arbitros:-------------")
console.log(a1)
console.log(a2)

console.log("----------Calendario:-------------")
console.log(calendario)


