console.log("hola " + "mundo");
console.log("el dijo: \"hola mundo\"");

let nombreUsuario = "Matias ";
let edadUsuario = 22;

console.log("Hola tu nombre es " + nombreUsuario + "y tu es: " + edadUsuario);
console.log(`Hola tu nombre es ${nombreUsuario} y tu edad es ${edadUsuario}`);

let dato = "holaa";

let contraseña = "    12423   "

console.log(dato.length); //mostrarme la longitud de un elemento, ES UNA PROPIEDAD
console.log(nombreUsuario.length); 
console.log(dato.toUpperCase()); //pasar la cadena a Mayuscula, ES UN METODO
console.log(dato.toLowerCase()); //pasar la cadena a minuscula, ES UN METODO
console.log((dato.charAt(2))); //devuelve un elemento de una determinada posicion, que debo indicarle a travez de; parametro
console.log(dato.substring(1,4)); // devuelve una parte de la cadena segun se le indique en el parametro, debemos indicar desde donde y hasta donde queremos cortar
console.log(contraseña.trim()); // elimina los espacios en blanco
console.log(dato.includes("aa")); // verificamos si el texto que buscamos coincide o se encuentra dentro de la variable "true"
console.log(dato.includes("aal"));//"false"

//! Ejercicio en clases: Recibir el apellido del usuario, y mostrar por consola la ultima letra

//1- Recibir el apellido del usuario
//2- Mostrar por consola la ultima letra

//?let apellidoUsuario = prompt("ingrese su apellido");

//?console.log((apellidoUsuario.charAt(apellidoUsuario.length-1)));

//! Ejercicio 2 recibir el nombre de usuario, y mostrar por consola con la primera letra en Mayuscula

//1- pedir al usuario el nombre
//2- mostrar por consola el nombre con la primera letra en mayuscula

//?const nombre = prompt("Ingrese su nombre ");
//const resultado = nombre.charAt(0).toUpperCase();
//const resultado2 = nombre.substring(1).toLowerCase();
//console.log(resultado + resultado2);


let numero = 37.65;

//?console.log(Math.round(numero)); //redondea
//?console.log(Math.floor(numero)); //truncamiento

//!todo ENCONTRAR MAXIMOS Y MINIMOS

let maximo = Math.max(1,14,45,78,36);
let minimo = Math.min(1,14,45,78,36);
console.log(`El numero mayor es ${maximo}`);
console.log(`El numero menor es ${minimo}`);

//!todo potencias y raices
console.log(Math.pow(3,2)); //cuadrado
console.log(Math.pow(3,3)); //cubo
console.log(Math.sqrt(9)); //raiz cuadrada
console.log(Math.cbrt(27)); //raiz cubica

let aleatorio = Math.round (Math.random() * 10);
console.log(aleatorio);

let numeroDos = "12.65";
let numeroTres = 13.65;
console.log(parseInt(numeroDos)); //convierte el string en numero pero solo enteros
console.log(Number(numeroTres)); // no reconoce letra, solo numeros
console.log(parseFloat(numeroDos)); //convierte el string en numeros, lee enteros y decimales










