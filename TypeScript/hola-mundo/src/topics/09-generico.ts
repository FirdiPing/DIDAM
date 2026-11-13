export function cualEsMiTipo<T>(argumento: T):T{
    return argumento;
}

let soyString = cualEsMiTipo<string>('Hola mundo');
let soyNumer = cualEsMiTipo<number>(100.02);
let soyArray = cualEsMiTipo<number[]>([1,2,3,4,5,6]);


console.log(soyString.split(' '));
console.log(soyNumer.toFixed());
console.log(soyArray.join('-'));
