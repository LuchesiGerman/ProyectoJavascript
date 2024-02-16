const transacciones = [
    { concepto: 'Debito', saldo: 3000, fecha: '12-01-24'}
]

const carrito = [ 
    { nombre: ' Lentes Toko', stock: '1', precio: 50000},
    { nombre: ' Lentes Marrok', stock: '3', precio: 7500},
    { nombre: ' Lentes Marzul', stock: '3', precio: 50000},
    { nombre: ' Lentes Rosal', stock: '2', precio: 90000},
    { nombre: ' Lentes Gernom', stock: '2', precio: 78000},
    { nombre: ' Lentes Vice', stock: '1', precio: 75500},
    { nombre: ' Lentes San Francisco', stock: '1', precio: 69900},
    { nombre: ' Lentes Roma', stock: '4', precio: 79000},
    { nombre: ' Lentes Aruba', stock: '3', precio: 75000},
    { nombre: ' Lentes Los Angeles', stock: '5', precio: 85000},

];

carrito.push({ nombre: 'Lentes wew', categoria: '6', precio: 30000})

console.table( carrito )


for( let i=0; i<carrito.length; i++ ){
    console.log('Nombre ' +  carrito[i].nombre );
    console.log('Precio ' +  carrito[i].precio );    
}