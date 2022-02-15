

//Funciones tipo expresion  
// o Funciones anonimas
//Declaracion de la funcion anonima
let sumar = function(a,b){ return a + b};

//Uso de la funcion de tipo expresion:
let resultado = sumar(1,2);
console.log(resultado);

//Anonima dentro de una anonima
let s = function(nombre, apellido){
    let ñ = function(saludo){
        if(saludo.length == 4 ){
            return "hola" + saludo;
        }else{
            return "Excedido";
        }
    }
    return "Hola " + ñ("Bonos") +" "+ nombre +" " + apellido;
}

let saludo = s("Miguel","Ramirez");
console.log(saludo);


