

//Funcion tipo self invoking
//declaracion de la funcion self
//Estas funciones no son reutilizables
//No se puede volver a llamarlas.
//No tienen nombre ni variable.
//Para momentos en el que se carga
//un programa.
(function(){
    console.log("Ejecutando la funcion");
})();


(function(a,b){
    console.log("suma: " + (a + b));
})(3,6);



