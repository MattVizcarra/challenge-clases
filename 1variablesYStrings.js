let nombre = "Matias";
let apellido = 'Vizcarra';
let edad = 22;
console.log(nombre)
console.log(apellido)
console.log(edad)


//! tipos de variables
//var : es la forma para declarar variables y su alcance es global (no se usa- es mala practica)
//! let: es la forma mas utilizada, son variables a las q se puede cambiar el valor a lo largo del tiempo
edad = 23;

//const : son variables constantes, no se pueden modificar su valor

//!strings

let textos = 'Hola a todos';
let textos2 = 'Hola a todos';
console.log(textos)
console.log(textos2)

//tipos de operadores

const comision = '59i';

//! operadores aritmeticos
//? suma +, resta -, multiplicacion *, division /, resto %
console.log(15*10)
console.log(15/10)
console.log(15%10)
console.log(15+10)
console.log(15-10)

//operadores unitarios
//! ++ (incremento)
let numero = 20;
numero++;
console.log(numero)
//! -- (decremento)
let numero2 = 23;
numero2--;
console.log(numero2)
//! / ! (negacion)
let femenino = true;
femenino/! 
console.log(femenino)

//operadores relaciones
30 == 30 //!igual a ==> true
30 !=30 //! diferente a  ==> false
30 === 30 //!estrictamente igual ==> true
30 !== '30' //!estrictamente diferente ==> 
30 > 5 //! mayor que ==> true
30 < 5 //! menor que ==> false
30 >= 30 //! mayor o igual que ==> true
30 <= 25 //! menor o igual que ==> false

//operadores logicos
30 < 10 && 30 < 15 //!espera que las condisiones se cumplan
30 > 10 || 30 > 40 //!espera que una de las condisiones se cumpla

let nombreUser = 'Matias'
let apellidoUser = 'Vizcarra'

console.log(nombreUser + apellidoUser)

//! 2. crea un programa que solicite al usuario y luego lo salude por su nombre
//uno
console.log('¡Hola, Mundo!')
//dos
let nombreUsuario = prompt("ingrese su nombre")
let apellidoUsuario = prompt ("ingrese su apellido")
alert("buenas noches " + nombreUsuario + apellidoUsuario )
//tres
let numUno = prompt ("ingrese un numero que desee sumar")
let numDos = prompt ("ingrese un numero que desee sumar")
alert("la suma es de:" + (numUno + numDos ))
