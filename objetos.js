//! Forma de crear objetos con notacion literal

let person = {
    name: 'Matias',
    age: 30,
    location: 'San Miguel de Tucuman',
    hobbies: ['andar en bici', 'programar'],
    pet: [
        {
            name: 'firulais',
            type: 'dog'
        },
        {
            name: 'blanco',
            type: 'cat'
        }
    ],
    children: 'no',
    saludar: function () {
        console.log('Hola chicos soy Matias!');
    }
}

let person2 = {
    name: 'Messi',
    age: 36,
    dni: 25677656,
    children: [
        {
            name: 'thiago',
            age: 10
        },
        {
            name: 'Mateo',
            age: 7
        },
        {
            name: 'Ciro',
            age: 4,
            pet:['toto', 'coco']
        }
    ]
}

//!Creando objetos a partir de funciones constructoras

function Team (name, colors, people){
    this.name = name;
    this.colors = colors;
    this.people = people;
}
let SanMartin = new Team('San Martin de Tucuman', ['rojo','blanco'],70000);
let Atletico = new Team('Atletico Tucuman', ['celeste', 'blanco'], 70000);

//! Creando objetos a partir de clases

class Country{
    constructor(name, people){
        this.name = name;
        this.people = people;
    }
}

const Argentina = new Country('Argentina', 45000000);
const Brasil = new Country('Brasil',7000000);//instanciando

//todo: manejando objetos y tipos de datos

let productos = [
    {id:1, nombre: 'Fideo', descripcion: 'fideo tirabuzon rivoli', precio: 200, categoria: ['familiar', 'alimentos']},
    {id:2, nombre: 'arroz', descripcion: ' arroz largo 53', precio: 200, categoria: ['familiar', 'alimentos']}
]
console.log(productos[0],nombre);


//? challenge


let Pelis = [
    {id:1, nombre: 'Spider-Man', descripcion: '3 pelicula en solitario de spiderman', año: '2022', 
    mostrarDesc: function (){
        console.log(`La serie se llama ${this.nombre}, un resumen breve es: ${this.descripcion}`)
    }},
    {id:2, nombre: 'doctor Strange', descripcion: '2 pelicula en solitario de doctor Strange', año: '2022',
    mostrarDesc: function (){
        console.log(`La serie se llama ${this.nombre}, un resumen breve es: ${this.descripcion}`)
    }
    }
]

Pelis.forEach(pelis => pelis.mostrarDesc())

