

//Funciones como Objeto
function miFuncion(a,b){
    return a + b;
}
console.log(typeof miFuncion);


//Uso del objeto arguments
//objeto similar al array accesible solo dentro
//de funciones, contiene los valores de los argumentos
//pasados en esa funcion.
//propiedad length cuenta cuantos argumentos 
//posee dicha funcion.
function sumar(x,y){
    console.log(arguments.length);
    return x + y;
}

console.log(sumar(2,5));

//metodo para comprobar que una funcion puede
//ser descrita como un objeto 
//Uso del toString para describir una funcion como objeto
var sumarTexto = sumar.toString();
console.log(sumarTexto);

