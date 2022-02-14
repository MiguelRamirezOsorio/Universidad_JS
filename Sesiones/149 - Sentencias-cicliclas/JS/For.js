

//Ejemplo for:
for(let contador = 0; contador < 4; contador++){
    console.log(contador);
}
console.log("Fin del for");



//Ejm Break Primer Numero Par;
for(let cont = 0; cont <= 5; cont++){
    if(cont % 2 == 0){
        console.log(cont);
        break;
    }
}

conta = 0
while(conta < 10){
    if(conta % 2 == 0){
        console.log(conta);
        break;
    }
}

etiquetaInicio:
//Ejm continue Solo numeros pares
for (let ctd = 0; ctd < 10; ctd++){
    if(ctd % 2 !== 0){
        continue etiquetaInicio; 
    }
    else{
        console.log(ctd);
    }
}




