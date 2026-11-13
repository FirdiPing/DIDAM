const dbz: string[] = ["Goku", "Piccolo", "Bulma"];

console.log('Personaje 4:', dbz[3] || 'No hay personaje');

const pj = dbz[3] || 'No hay personaje';

console.log('Personaje 4:', pj);


// Desestructuración de arrays
const [p1, p2, p3] = dbz;

console.log('Personaje 3:', p3);

const [, , , per4 = "Not found"] = dbz;

console.log('Personaje 4:', per4);

export {};