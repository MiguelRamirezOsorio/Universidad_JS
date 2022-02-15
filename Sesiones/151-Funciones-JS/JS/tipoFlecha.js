

//Funcion flecha
//Es una alternativa compacta a una expresión de 
//función tradicional, pero es limitada y no se 
//puede utilizar en todas las situaciones.
//EJM:
//No tiene sus propios enlaces a this o super y no se debe usar como métodos.
//No tiene argumentos o palabras clave new.target.
//No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
//No se puede utilizar como constructor.
//No se puede utilizar yield dentro de su cuerpo.

//Declaracion de una funcion flecha : funcion con nombre
const sumarFTipoFlecha = (a,b) => "suma: "  + (a + b) ;
let resultado = sumarFTipoFlecha(3,9);
console.log(resultado);

//funcion flecha sin argumentos
let x = 4;
let y = 3;
() => x + y +100; 

//Funcion flecha vs funcion anonima
//Modo de declaracion

//Funcion anonima:
let resta = function(x,y){return x-y};

//Funcion flecha:
const sustraccion = (x,y) => x-y;

let resAno = resta(6,5);
let resFle = sustraccion(6,5);

console.log(resAno);
console.log(resFle);



//Parametros y argumentos:
//Parametro: lista de variables(incognitas) de la funcion,
//van dentro de los parentesis de la funcion
//miFuncion(param1,param2){}

//Argumento: son los valores que se mandan cuando vamos a 
//ejecutar nuestra funcion.
//let resultado = miFuncion(3,6);


let adicion = function(param1,param2){
    let p1 = arguments[0];
    let p2 = arguments[1];
    console.log("parametro 1; argumento = " + p1);
    console.log("parametro 2; argumento = " + p2);
    return param1 + param2;
}

let total = adicion(8,3);
console.log(total);

//OBS: En JS se pueden omitir valores o sobrecargar valores a algunos parametros
//esto no restringira el codigo;
//EJM:

let adicion1 = function(param1,param2){
    let g1 = arguments[0];
    let g2 = arguments[1];
    console.log(arguments[2]);
    console.log("parametro 1; argumento = " + g1);
    console.log("parametro 2; argumento = " + g2);
    return param1 + param2;
}
let total1 = adicion1(5);
console.log(total1);

let adicion2 = function(param1,param2){
    let r1 = arguments[0];
    let r2 = arguments[1];
    let r3 = arguments[2];
    let r4 = arguments[3];
    console.log("parametro 1; argumento = " + r1);
    console.log("parametro 2; argumento = " + r2);
    console.log("parametro ---; argumento = " + r3);
    console.log("parametro ---; argumento = " + r4);
    return param1 + param2;
}

let total3 = adicion2(3,4,5,6,7);
console.log(total3);


//OBS2: Si se ponen valores por default a los parametros
//el objeto arguments no leera nada pero la funcion funcionara
// de manera correcta
let multiplicacion = function( q = 3, w = 4){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return q * w;
}
let response = multiplicacion();
console.log(response);


//Ejemplo sumar argumentos pares e impares y despues restar
let result = addAll(5, 4, 13, 10, 9, 8);
function addAll(){
    let sum = 0;
    let sum1 = 0;
    for(let i=0; i < arguments.length; i++){
        if(arguments[i] % 2 === 0){
            sum += arguments[i];
        }else{
            sum1 += arguments[i];
        }
        
    }
    return sum1 - sum;
}
console.log(addAll.length);
console.log(result);

