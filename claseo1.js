let usuario = prompt('Ingrese el Usuario');
usuario = usuario.toLowerCase();
let password = prompt('Ingrese la contraseña');
let mensaje;

// Si el usuario es 'Ger' y el password es '123abc'
//           true        Y           true  
if(  usuario == 'Ger' || usuario =="ger"|| usuario =="GER" &&  password == '123abc' ) {
    mensaje = 'Bienvenido ' + usuario;
} else {
    mensaje = 'Usuario o Contraseña Incorrectos';
}

alert(mensaje); 

function calculoCarro(cantidad,precio,inputtext,totaltext){
    let resultado = precio + cantidad;
    // Calculo del subtotal
    let subtotal = precio*cantidad;
    let inputtextValue=subtotal;
    //Calculo del total
    let total = eval(totaltext.value);
    totaltext.value = total + subtotal;
    return resultado;
  }

console.log ("inicio del programa")
let edad =26;
 //declarando una funsion 

function pedirNombre (){
    let nombre = prompt("Ingrese el nombre");
}

pedirNombre();

