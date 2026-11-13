interface Personaje {
    nombre: string;
    pv: number;
    muestraPv: () => void;
}

const curarPersonaje  =(personaje:Personaje, cantidad:number)=>{
    personaje.pv+=cantidad;
}

const saiyan: Personaje = {
    nombre: 'Goku',
    pv: 500,
    muestraPv() {
        console.log(`Puntos de vida de ${this.nombre}: ${this.pv}`)
    },
}

saiyan.muestraPv()
curarPersonaje(saiyan,300)
saiyan.muestraPv()
curarPersonaje(saiyan,200)
saiyan.muestraPv()

export {};