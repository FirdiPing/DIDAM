function decoradorClase(
    constructor: any
){
    return class extends constructor {
        nuevaPropiedad = "Nueva propiedad";
        hola ="Adios"
    }
}


@decoradorClase
export class SuperClase{
    public miPropiedad: string = 'patata';

    print(){
        console.log('Hola Mundo')
    }

    
}
console.log(SuperClase);

const superClase = new SuperClase();
console.log(superClase);


export{}