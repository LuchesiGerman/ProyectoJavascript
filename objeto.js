const nombre = 'Juan';  // String
const dni = 1234;  // Number
const casado = true;  // Boolean

const saludar = function(nombre){  // function
    alert('Hola ' + nombre + '. Soy una función');
}


// Objetos con función constructora 
function Producto( nombre, precio ){
    // Atributos
    this.nombre = nombre;
    this.precio = precio;
    this.precioFINAL = 0;
    // Métodos
    this.sumarIVA = function(){
        this.precioFINAL = this.precio * 1.21;
        alert('El precio es $' + this.precio + ' | Con IVA es $' + this.precioFINAL)
    }
}

const producto1 = new Producto('Lentes Toko', 85000);
const producto2 = new Producto('Lentes Marrok', 9900);
const producto3 = new Producto('Lentes Marzul', 19900);
const producto4 = new Producto('Lentes Rosal', 12000);
const producto5 = new Producto('Lentes Gernom', 17600);
const producto6 = new Producto('Lentes Vice', 16700);
const producto7 = new Producto('Lentes San Francisco', 21900);
const producto8 = new Producto('Lentes Roma', 17000);
const producto9 = new Producto('Lentes Aruba', 15900);
const producto10 = new Producto('Lentes Los Angeles', 17000);

producto1.sumarIVA();

console.log( producto1);
console.log( producto1.nombre );
