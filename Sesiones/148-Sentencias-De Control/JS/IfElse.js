
//Ejemplo if-else
let condicion = true;

if (condicion){
    console.log("Condicion verdadera");
}
else{
    console.log("Condicion falsa.");
}



//ejemplo1:
let numero = 3;

if (numero == 1){
    console.log("Numero uno.");
}
else if(numero == 2 ){
    console.log("Numero dos.");
}
else if(numero == 3 ){
    console.log("Numero 3.");
}
else{
    console.log("Numero desconocido");
}

//Ejemplo 2 :
let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "verano";
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "otoño";
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "invierno";
}
else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "primavera";
}
else{
    estacion = "Estacion no existente";
}

console.log(estacion);


//Ejercicio 3:
let hora = 13;
let comunicado;

if(hora >= 0 && hora < 6 ){
    comunicado = "Durmiendo"
}
else if(hora >= 6 && hora < 12){
    comunicado = "Buenos Dias";
}
else if(hora >= 12 && hora < 18){
    comunicado = "Buenas Tardes";
}
else if(hora >= 18 && hora < 24){
    comunicado = "Buenas Noches";
}

console.log(comunicado);