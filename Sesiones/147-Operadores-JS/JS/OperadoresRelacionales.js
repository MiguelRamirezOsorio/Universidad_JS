

//Operadores Relacionales:
let a = 3, b = 3 , c = "3";
let z;

// Operador > "mayor que"
z = a > b;
console.log( z );

// Operador < "menor que"
z = a < b;
console.log( z );

// Operador <= "menor igual que"
z = a <= b;
console.log( z );

// Operador >= "mayor igual que"
z = a >= b;
console.log( z );


//Ejercicio numero par
let s = 10;

if( s % 2 == 0){
    console.log( "Es numero par");
}
else{
    console.log("no es numero par");
}


//Ejercicio mayor de edad:
let edad = 23;
let adulto = 18;
if( edad >= adulto){
    console.log( "Usted es mayor de edad." )
}
else{
    console.log( "Usted es menor de edad." )
}


//Ejemplo operador and
let m = 8;
let valMin = 5;
let valMax = 10;

if( m >= valMin && a<= valMax ){
    console.log("Dentro del rango");
}
else{
    console.log("fuera de rango.");
}


//Ejemplo operador OR
let vacaciones = false;
let diaDescanso = false;

if( vacaciones || diaDescanso ){
   console.log("Puede asistir.");
}
else{
   console.log("Esta ocupado.")
}


//operador ternario
let resultado;
resultado = (3 > 2) ? "Verdadero" : "Falso";
console.log(resultado);


//Conversion de String a Number
let miNumero = "10";

console.log(miNumero);
console.log(typeof miNumero);

//Conversion de String a Number con el atributo Number
let años = Number(miNumero);
console.log(typeof años);
if( años >= 18 ){
    console.log("Puedes votar");
}
else{
    console.log( "No puedes votar");
}

let votar = (años >=18) ? "Puedes votar" : "no puedes votar";
console.log( votar );


//Funcion isNaN
//Valor con numeros y caracteres
let miNumber = "10x";

let age = Number(miNumber);
console.log( age );

if( isNaN(age)){
    console.log("No es un numero.")
}
else{
    if( age >= 18 ){
        console.log("Puedes votar");
    }
    else{
        console.log( "No puedes votar");
    }
}

let response = (isNaN(age)) ? "No es un numero" : "Es un numero";
console.log(response);


//Ejemplos de precedencia de operadores:
let n1 = 5;
let n2 = 10;
let n3;

n3 = ++n1 + n2--;
console.log( n1 );
console.log (n2);
console.log ( n3 );

// 1° *, 2° /, 3° +
n3 = 4 + 5 * 6 / 3;
console.log( n3 );

//1° (), 2° (+), 3° /, 4° +
n3 = (4 + 5) + 6 / 3;
console.log(n3);