//! Herencia

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    saludar(){
        console.log('Hola soy ' + this.name)
    }
}
class Estudiante extends Person {
    constructor(name, age, comision){
        super(name, age);
        this.comision = comision;
    }
}

let ivan = new Estudiante('ivan', 30, 'comision 59i'); //? INSTANCIA creamos el objeto con sus respectivos datos.

class SuperHeroe extends Person {
    constructor(name, age, power){
        super(name, age);
        this.power = power;
    }
}
let superman = new SuperHeroe('SuperMan', 35, 'volar');
let ironman = new SuperHeroe('IronMan', 45, 'traje de metal');

