
/**
 * Suma dos números.
 *
 * @param a - Primer número que se va a sumar.
 * @param b - Segundo número que se va a sumar. Por defecto, vale 0.
 * @returns El resultado de sumar a y b.
 */
function sumar(a: number, b: number = a): number {
    return a + b;
}

/**
 * Resta dos números.
 *
 * @param a - Número del que se va a restar.
 * @param b - Número que se va a restar. Por defecto, vale 0.
 * @returns El resultado de restar b a a.
 */
function restar(a: number, b: number = a): number {
    return a - b;
}

/**
 * Multiplica dos números.
 *
 * @param primerNumero - Primer número de la multiplicación.
 * @param base - Segundo número. Por defecto, toma el valor de primerNumero.
 * @returns El resultado de multiplicar ambos números.
 */
function multiplicar(primerNumero: number, base: number = primerNumero): number {
    return primerNumero * base;
}

/**
 * Divide dos números.
 *
 * @param primerNumero - Número que se va a dividir (dividendo).
 * @param base - Número por el que se divide (divisor).
 *               Por defecto, toma el valor de primerNumero.
 * @returns El resultado de la división.
 * @throws Error si el divisor es cero.
 */
function dividir(primerNumero: number,base: number = primerNumero): number {
    if (base === 0) {
        throw new Error("No se puede dividir entre cero.");
    }

    return primerNumero / base;
}


// Pruebas y resultados por consola

console.log("SUMA");
console.log(sumar(10, 5));       // 15
console.log(sumar(10));          // 10

console.log("RESTA");
console.log(restar(10, 2));      // 8
console.log(restar(10));         // 10

console.log("DIVISIÓN");
console.log(dividir(10, 2));     // 5
console.log(dividir(10));        // 1

console.log("MULTIPLICACIÓN");
console.log(multiplicar(10, 2)); // 20
console.log(multiplicar(10));    // 100




