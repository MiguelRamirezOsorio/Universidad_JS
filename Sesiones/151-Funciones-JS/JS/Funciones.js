
//Hoisting: se puede llamar a la funcion 
//antes o despues de definirla.
miFuncion(4,2);


//Introduccion a Funciones JS
//Declaracion de la funcion
function miFuncion(a,b){
    console.log("suma : " + (a + b) );
}

//Llamando la funcion
miFuncion(3,5);



//Uso de la palabra return
function suma(a,b){
    return "suma: "+ (a + b);
}

let resultado = suma(4,7);
console.log(resultado);


 


