/* function sumarNumerosSinDefinirNada(){

}

function sumarNumerosSinTipos(a,b){

} */

function sumarNumeros(a:number, b:number): number{
    return a+b;
}

const resultado: number =sumarNumeros(1 , 3);
console.log(resultado)

const sumarNumeroFlecha = (a:number, b:number): string => {
//    return (a + b).toString();
    return `La suma de los numeros es ${a+b}`;
}

function multiplicar(primerNumero: number, segundoNumero?: number, base: number = 2){
    return primerNumero*base;
}

const resultado2: string = sumarNumeroFlecha(1,2);
console.log(resultado2);


const resultadoMultiplicar: number = multiplicar(5);
console.log(resultadoMultiplicar);


export { };

