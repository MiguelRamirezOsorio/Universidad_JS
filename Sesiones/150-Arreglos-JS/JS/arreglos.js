

//arreglos js

//Sintaxis antigua
let autos =  new Array('BMW','Audi','Volvo');

//Sintaxis moderna
const auto = ['BMW','Audi', 'Volvo'];

console.log(auto);


//Ejemplo recorrido de arreglos
console.log(auto[0]);
console.log(auto[1]);
console.log(auto[2]);

//Recorrer todos los elementos
for(let i = 0; i < auto.length; i++){
    console.log(i + ':' +auto[i]);
}



//Modificar valores de un arreglo:
console.log(auto[1]);
auto[1] = "Mercedes";
console.log( auto[1]);



//Agregar un elemento al arreglo
//Metodo push
//auto.push('Mazda');
//console.log(auto);
//console.log(auto[3]);


//Usar el largo del arreglo
//console.log(auto);
//console.log(auto.length);
//auto[auto.length]= 'Mazda';
//console.log(auto);


//Agregando en indices superiores
//Obs: puede dejar vacios
console.log(auto);
auto[4] = 'Toyota';
console.log(auto);
console.log(auto[3]);


//Conocer si es un array:
//Uso del .isArray
console.log(Array.isArray(auto));

//Uso del instanceof
console.log(auto instanceof Array);



