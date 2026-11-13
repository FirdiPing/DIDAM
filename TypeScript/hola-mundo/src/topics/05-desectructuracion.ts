

interface ReproductorAudio {
    volumenAudio: number;
    duracionCancion: number;
    cancion: string;
    detalles: Detalles;
}


interface Detalles{
    autor: string;
    anio: number;
}

const reproductorAudio: ReproductorAudio = {
    volumenAudio: 100,
    duracionCancion: 120,
    cancion: "Song Two",
    detalles: {
        autor: "Oasis",
        anio: 200
    }
}

const {cancion} = reproductorAudio;
console.log('Cancion',cancion);

const {autor}=reproductorAudio.detalles;
console.log('Autor',autor);

const{cancion: cancion2} = reproductorAudio;
console.log({cancion2});

const{
    cancion:miCancion,
    duracionCancion:miDuracion,
    detalles
}=reproductorAudio;


const {autor: autor2 }=detalles

console.log('Cancion:',miCancion);
console.log('Duracion:',miDuracion);
console.log('Autor:',autor2);


export {}