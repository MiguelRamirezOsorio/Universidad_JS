
//Ejemplo de switch - case
let numero = 3;

let numeroTexto = 'valor desconocido';

switch(numero){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Numero desconocido';
}

console.log(numeroTexto);


//Ejemplo 1:
let mes = 4;
let estacion;

switch(mes){
    case 12 : case 1: case 2:
        estacion = 'Verano';
        break;
    case 3 : case 4: case 5:
        estacion = 'Otoño';
        break;
    case 6 : case 7: case 8:
        estacion = 'Invierno';
        break;
    case 9: case 10: case 11:
        estacion = 'Primavera';
        break;
    default:
        estacion = 'Solo son 12 meses, tonto';
}

console.log( estacion );


//Comparacion estricta switch
let dia = '1';
let descripcion;

switch(dia){
    case 1: 
        descripcion ='Lunes';
        break;
    case 2:
        descripcion = 'Martes';
        break;
    case 3:
        descripcion = 'Miercoles';
        break;
    case 4: 
        descripcion = 'Jueves';
        break;
    case 5:
        descripcion = 'Viernes';
        break;
    case 6:
        descripcion = 'Sabado';
        break;
    case 7:
        descripcion = 'Domingo';
        break;
    default:
        descripcion = 'Ingresa un numero';        
}
console.log(descripcion);