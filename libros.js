//! a) crear una clase libros que debe tener las siguientes propiedades:
//1- num de libros ya leidos
//2. libros sin leer
//3- siguente libro
//4. libro actual
//5- ultimo libro
//6- array con todos los libros

class ListaLibros {
    constructor(dueño){
        this.dueño = dueño;
        this.libros = [];
        this.librosYaLeidos = [];
        this.librosNoLeidos = [];
        this.libroActual = null;
        this.ultimoLibro = null;
        this.siguienteLibro = null;
    }
    agregarLibro(libro){
        this.libros.push(libro);
        if(libro.leido == true){
            this.librosYaLeidos.push(libro);
        }else{
            this.librosNoLeidos.push(libro);
        }
    }

    empezarLibro(libro){
        this.libroActual = libro;
    }

    finalizarLibro(libro){
        this.ultimoLibro = this.libroActual;
        this.librosYaLeidos.push(libro);
        this.librosNoLeidos = this.librosNoLeidos.filter(librito => librito.titulo != this.libroActual.titulo);
        this.libroActual = null;
    }
}

//! b) crear una clase libro
//1 titulo
//2 genero
//3 autor
//4 booleano leido o no

class Libro {
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}

const libroMatias = new ListaLibros ('Matias');
const principito = new Libro ('el principito', 'fantasia', 'expery',true)

//! c) crear metodo para añadir a la lista de libros

