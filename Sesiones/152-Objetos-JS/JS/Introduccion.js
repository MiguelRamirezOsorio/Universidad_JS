//no es un objeto, no tiene propiedades 
//ni metodos.
let x = 10;
console.log(x.length);
//Objetos en JS
//Un objeto tiene propiedades y metodos
//OBS: los valores hexadecimales inicia con "0X"
//Creacion de un objeto(se le asigna una referencia en memoria)
let persona = {
    nombre : 'Miguel',
    apellido : 'Ramirez',
    email : 'migRaos@gmail.com',
    edad : 28,
}

console.log( persona.apellido );
console.log( persona.nombre );
console.log( persona.email );
console.log( persona.edad );

console.log(persona);



let persona1 = {
    nombre : 'Micael',
    apellido : 'Ramos',
    email : 'micRamo@gmail.com',
    edad : 24,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    añoNacimiento: function(){
        return 2022 - this.edad;
    }
}

console.log(persona1.nombreCompleto());
console.log(persona1.añoNacimiento());