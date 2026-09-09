import { type Producto, calcularISV2 } from './05-desestruracion-funciones';

const carrito: Producto[] = [
    {
        desc: 'Telefono 2',
        precio: 2300
    },
    {
        desc: 'telefono 3',
        precio: 2500
    }
];

const [total, isv] = calcularISV2(carrito);
console.log('Total carrito', total);
console.log('ISV carrito', isv);