import { type Producto, calculaImpuesto } from './06-desectructuracion-argumentos';

const carritoCompra:Producto[]=[
    {
        descripcion: 'iPhone SE',
        precio:400
    },
    {
        descripcion: 'Airpods',
        precio:100
    }
]

const [total,impuesto]= calculaImpuesto({
    impuesto:0.21,
    productos:carritoCompra
});

console.log('Total',total);
console.log('Impuesto',impuesto);
