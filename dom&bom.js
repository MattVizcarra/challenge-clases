//! Dom y Bom

//?DOM document object model a travez del Dom puedo acceder al html, o a todo lo visual de nuestro proyecto




//?BOM browser object model puedo acceder a toda la informacion de la barra de navegacion

//todo: window.navigator.mediaDevices.getUserMedia({video:true})

//! funciones para manejar el tiempo

//setInterval() //todo: Ejecuta una tarea cada un determinado lapso de tiempo
//setTimeout() //todo: ejecuta una funcion pasado determinado lapso de tiempo

function helloworld (){
    console.log('Hola Comision');
}

// setInterval(() => helloworld(),1000)
//setTimeout(() => console.log('hola, buenas noches'))

//!Ejercicio de tiempo, crear un contador que despues de los diez segundos me muestre un msj para el despegue!!

// let contador = 10

// const contadorTiempo = setInterval(() => {
//     console.log('despegue en ', + contador)
//     contador--
// }, 1000)

// setTimeout(()=> {
//     clearInterval(contadorTiempo);
//     console.log('despegue!!')
// },10000)


function cambiarTexto(){
    //getElementById('') Trae un elemento a travez de su id
    //getElementByClassName('') Trae los elementos que tengan esa clase
    //querySelector('#texto')
    //getElementBy

    const h2Cambio = document.getElementById('h2-cambiar');

    h2Cambio.innerText = 'El texto ha sido modificado';
    h2Cambio.style.backgroundColor = 'red';

}

//todo: cambiar de tema
function cambiarDeTema(){
    const = document.getElementById('probando-tema');
}
