
/*Tipo de datos basicos*/

//Tipo de dato string
var nombre = "Miguel";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre)


//Tipo de dato numerico
var numero = 1000;
console.log(numero);


//Tipo de dato objeto
var objeto = {
    nombre : "Miguel",
    apellido : "Ramirez",
    email :"miguel.ramirez6@unmsm.edu.pe",
    telefono : "932456765"
}

console.log(objeto)

//Tipo de dato boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera);


//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);


//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);


//Tipo de dato clase: es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    } 
}
console.log(Persona);
console.log(typeof Persona);


//Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);
x = undefined
console.log(x);


//Tipo de dato null: es object
var y = null;
console.log(y);
console.log(typeof y);


//Tipo de dato Array: es object
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);


//Tipo de dato empty string: es un valor que puede ser
// asignado, no es un tipo de dato, es solo un string.
var z = '';
console.log(z)
console.log(typeof z);


//Concatenacion de Strings
var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Miguel" + " " + "Ramirez"
console.log(nombreCompleto2);

var x = nombre + 1 + 24; 
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);


//Sintaxis basica de JavaScript para 
//la declaracion de variables

//Uso VAR
var mivariable = "valor"
console.log(mivariable);

//Uso LET
for (let i = 0; i < 1; i++){
    console.log(`let valor: ${i}` )
}
console.log(i)

//Uso CONST
const equipo = "Liverpool";
equipo = "AD Tarma";
