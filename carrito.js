const transacciones = [
    { concepto: 'Debito', saldo: 3000, fecha: '12-01-24'}
]

const carrito = [ 
    { nombre: ' Lentes Toko', categoria: '1', precio: 5000},
    { nombre: ' Lentes Marrok', categoria: '3', precio: 7500},
    { nombre: ' Lentes Marzul', categoria: '3', precio: 50000},
    { nombre: ' Lentes Rosal', categoria: '2', precio: 90000},
    { nombre: ' Lentes Gernom', categoria: '2', precio: 75000},
    { nombre: ' Lentes Vice', categoria: '1', precio: 75000},
    { nombre: ' Lentes San Francisco', categoria: '1', precio: 75000},
    { nombre: ' Lentes Roma', categoria: '4', precio: 75000},
    { nombre: ' Lentes Aruba', categoria: '3', precio: 75000},
    { nombre: ' Lentes Los Angeles', categoria: '5', precio: 75000},

];

carrito.push({ nombre: 'Lentes wew', categoria: '6', precio: 30000})

console.table( carrito )


for( let i=0; i<carrito.length; i++ ){
    console.log('Nombre ' +  carrito[i].nombre );
    console.log('Precio ' +  carrito[i].precio );    
}

function buscarPorNombre (nombre ){
    const product = products.find( product => product.name.toLowerCase() === nombre.toLowerCase() );
    if (product ){
        return 'Se encontro el producto';
    } else {
        return 'No existe el producto';
    }
}

console.log( buscarPorNombre('TEcladO logitech') );