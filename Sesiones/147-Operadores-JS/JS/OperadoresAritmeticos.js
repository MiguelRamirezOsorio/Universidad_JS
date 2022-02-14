
//Operadores Aritmeticos JS
//Definiendo variables:
let a = 3;
let b = 2;
let z;

//Operador suma: +
z = a + b;
console.log( z );

//Operador resta: -
z = a - b;
console.log( z );

//Operador multiplicacion: *
z = a * b;
console.log( z );

//Operador division: /
z = a / b;
console.log( z );

//Operador exponenciacion: **
z = a ** b;
console.log( z );

//Operador modulo(residuo): %
z = a % b;
console.log( z );

//Operador incremento: ++
//Pre-incremento (++ antes de la variable)
z = ++a; //primero incrementa despues asigna
console.log ( a );
console.log( z );

//Post-incremento (++ despues de la variable)
z = b++; //primero asigna, despues incrementa
console.log( b );
console.log( z );

//Operador decremento: --
//Pre-decremento (-- antes de la variable)
z = --a; //primero decrementa despues asigna
console.log ( a );
console.log( z );

//Post-decremento (-- despues de la variable)
z = b--; //primero asigna, despues decrementa
console.log( b );
console.log( z );


//PRECEDENCIA DE OPERADORES:
let v = 1, w = 2, x = 3, y = 4;
let resp;

//se ejecuta 1° /, 2° *, 3° +
resp = v / w + x * y; 
console.log(resp);

//Se ejecuta 1° *, 2° /, 3° +
resp = x + v * w / y;
console.log(resp);

//Se ejecuta 1° (), 2° +, 3° /, 4° -
resp= (x + y) / v - w;
console.log( resp ); 



