
//Metodo GET
//Generando el objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jPerezqgmail.com',
    edad : 28,
    //Metodo get (obtener) usado en metodos dentro de un objeto
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
//Sin el get
//console.log(persona.nombreCompleto());

//Con el get
//Ya no hace falta la parentesis
console.log(persona.nombreCompleto);

//Metodo SET (modificar)
let cliente = {
    nombre :'Miguel',
    apellido:'Ramirez',
    email:'mRaos@gmail.com',
    idioma: 'es',
    get language(){
        return this.idioma.toUpperCase();
    },
    //Metodo SET (modificar), esto permitira hacer 
    //cambios a las propiedades del objeto, esto encapsula 
    //los valores de la propiedad
    set language(language){
        this.idioma = language.toUpperCase();
    }
}

//Mostrando la funcion language
console.log(cliente.language);

//USO DEL SET
cliente.language = 'en';
console.log(cliente.language);


//Metodo Constructor:
//permite crear diferentes tipos de objetos de ese mismo tipo
//Funcion constructor de objetos tipo Persona
function Personal(nombre, apellido, email, puesto) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.puesto = puesto;
}

let per1 = new Personal('Miguel', 'Ramirez','mirAOs@gmail.com','empleado');
let per2 = new Personal('Pancho', 'Villa', 'panchVil@gmail.com', 'gerente');

console.log(per1)
console.log(per2);


//Agregando metodos a un metodo constructor
function animal(nombre, genero, especie){
    this.nombre = nombre;
    this.genero = genero;
    this.especie = especie;
    this.NombreCientifico = function(){
        return this.genero + " " + this.especie;
    }
}

let perro = new animal("perro", "canis", "familiaris");
console.log(perro.NombreCientifico());

let gato = new animal("gato", "feliz", "familiaris");
console.log(gato.NombreCientifico());
//----------------------------

//Formas de crear objetos en JS:
//uso de constructor:
let lobo = new animal("lobo", 'canis', 'lupus');

//Sintaxis formal : Creacion del objeto mediante el Object
let objeto1 = new Object();

//Sintaxis mas usada
let objeto2 = {};
//----------------------------

//Caso de strings : 
//sintaxis formal: creacion mediante el objeto String
let cadena = new String('Hola');

//Sintaxis mas usada.
let cadena1 = 'Hola'
//----------------------------

//Caso numeros
//Sintaxis formal : creacion mediante el obejto number
let miNumero = new Number(20);
//sintaxis mas usada
let numero = 20;
//----------------------------

//Caso booleanos
//Sintaxis formal : creacion mediante el objeto Boolean
let miBolean = new Boolean(false);

//sintaxis mas usada
let booleano = false;
//----------------------------

//Caso arreglos
//Sintaxis formal : creacion mediante el objeto Array
let miArray = new Array(['Hola','Miguel']);

//sintaxis mas usada
let arreglo = ['Hola','Miguel'];
//----------------------------

//Caso funciones
//Sintaxis formal : creacion mediante el objeto Function
let miFuncion = new Function();

//sintaxis mas usada
let miFuncion2 = function(){};
//----------------------------