//!funciones declarativa

// function hello(){
//     console.log('Hola Mundo-desde funcion declarativa');
// }

//!funciones anonimas
// const hello2 = function(){
//     console.log('hola mundo-desde funcion anonima');
// }

//!arrow funtion

// const hello3 = () => {
//     console.log('hola mundo-desde la funcion de flecha');
// }

// hello();
// hello2();
// hello3();

//TODO: base de datos para eliminar usuarios:

// let dataBase = ['Matias', 'Celeste', 'Facundo', 'Ruben'];

// const deleteUser = () => {
//     let nameUser = prompt('ingrese el usuario que desee eliminar').toLowerCase();
    
//     let position = dataBase.indexOf(nameUser);

//     if(dataBase.includes(nameUser)){
//         dataBase.splice(position,1);
//         alert('usuario eliminado correctamente');
//     }else{
//         alert('el usuario ingresado no se encuentra');
//     }
// }

// const updateUser = () => {
//     let nameUser = prompt('ingrese el usuario que desee eliminar').toLowerCase();
//     let update = prompt ('que usuario queres agregar').toLowerCase();
//     let position = dataBase.indexOf(nameUser);

//     if(dataBase.includes(nameUser)){
//         dataBase.splice(position,1,update);
//         alert('usuario editado correctamente');
//     }else{
//         alert('no fue posible editar el usuario');
//     }
// }

//! las Funciones callback son funciones que se pasan como argumento de otras funciones

// const hi = nombre => alert('hola ' + nombre);
// const bye = nombre => alert('chau ' + nombre)
// function userRegister(saludo){
//     const name = prompt('como es tu nombre?');
//     saludo(name)
// }
// userRegister(hi)
// userRegister(bye)

//!metodos filter, find, map & foreach

const ageDataBase = [23, 30, 45, 25, 18, 16];

function mayoresDe25 (edad){
    if(edad >= 25){
        return edad;
    }
}
//todo: crea un nuevo array con todos los elementos que cumplen con la condicion en la funcion.
const repuesMayores2 = ageDataBase.filter(mayoresDe25); //?forma1
const repuesMayores = ageDataBase.filter(edad => edad >= 25); //?forma2
// console.log(repuesMayores);
// console.warn(repuesMayores2);


//todo: devuelve al primer elemento que cumpla con la condicion especificada.
const repuesMayores3 = ageDataBase.find(edad => edad >= 25);
//console.log(repuesMayores3);

//todo: MAP ejecuta una accion sobre cada uno de los elementos, los modifica y los guarda.
const en20años = ageDataBase.map(pepito => + 20);
//console.log(en20años);

//todo: Foreach no devuelve nada, tampoco modifica el array original, pide prestado, hace algo y lo vuelve a guardar

const en25años = ageDataBase.foreach(age => console.log(age + 25));
