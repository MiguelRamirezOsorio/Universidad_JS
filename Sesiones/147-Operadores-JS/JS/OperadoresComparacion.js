
//Operadores de comparacion
let a = 3, b = 2, c = "3";
let z;

//Operador igualdad "=="
//Revisa el valor sin importar el tipo
z = a == b;
console.log( z );

//Igualdad de String con un int 
z = a == c;
console.log( z );


//Operador igualdad estricta "==="
//Revisa el valor importando el tipo
z = a === c;
console.log( z );




//Operador distinto a "!="
//Revisa el valor sin importar el tipo
z = a != b;
console.log( z );

z = a != c;
console.log( z );




//Operador distinto estricto "!=="
//Revisa el valor importando el tipo
z = a!==c;
console.log( z );