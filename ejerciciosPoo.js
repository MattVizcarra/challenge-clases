//todo Escribe un programa que cree un objeto cuenta con las siguientes propiedades
//? una propiedad titular.
//? una propiedad saldo, teniendo como valor inicial 0;
//? un metodo ingresar() que permita ingresar dinero a la cuenta, pasando la cantidad como parametro.
//? un metodo extraer() que me permita retirar, la cantidad pasada como parametro.
//? un metodo() informar() que retorne la informacion del estado de cuenta.

class Cuenta {
    constructor(titular,){
        this.id = parseInt(Math.random() * 10000);
        this.titular = titular;
        this.saldo = 0;
    }
    ingresar(monto){
        if(monto > 0){
            this.saldo = this.saldo + monto;
            console,log(`tu saldo es ${this.saldo}`);
        }else if(isNaN(monto)){
            console.log('solo se admite numeros');
        }else{
            console.log('ingrese un monto mayor a 0');
        }
    }
    extraer(monto){
        if(monto <= this.saldo && monto > 0){
            this.saldo = this.saldo - monto;
            console.log(`tu nuevo saldo es: ${this.saldo}`);
        }else if(isNaN(monto)){
            console.log('solo se admite numeros');
        }else{
            console.log('ingrese un monto mayor a 0');
        }
    }
    informar(){
        console.log(`El saldo de la cuenta numero ${this.id} a nombre de ${this.titular} es de: $ ${this.saldo}`);
    }
}
const cuentaMatias = new Cuenta('Matias Vizcarra');

