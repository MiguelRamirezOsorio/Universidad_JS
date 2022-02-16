

//Uso del prototype en JS
function Producto(ID,nombre, costo,cantidad){
    this.ID = ID;
    this.nombre = nombre;
    this.costo = costo;
    this.cantidad = cantidad;
    this.isStock = function(){
        if (this.cantidad === 0){
            return 'Fuera de stock';
        }else{
            return "Stock disponible";
        }
    }
}

let lecheG = new Producto(1, 'leche Gloria', 3.50, 20);
console.log(lecheG.isStock());

let lays = new Producto(2,'Papitas Lays', 1.00, 0);
console.log(lays.isStock());

/*Que pasa si agrego una propiedad pero solo en Leche
y no en papitas Lays, tendra papitas lays esa propiedad?

lecheG.presentacion = '1 litro';
console.log(lecheG.presentacion);

console.log(lays.presentacion);
no hay esa propiedad. Por eso existe:*/

//Uso de prototype: Modifica los atributos o metodos 
//asociados a un objeto.
Producto.prototype.presentacion = '443322';

console.log(lecheG.presentacion);

console.log(lays.presentacion);
//Se ve que todos los objetos tienen el mismo valor en la 
//propiedad presentacion. 

//Modificando valores
lecheG.presentacion = '1 litro';
lays.presentacion = '500mg';

console.log(lecheG.presentacion);
console.log(lays.presentacion);
//se ve que cambiaron.


//USO DEL CALL: permite llamar un metodo que esta
//definido en un objeto desde otro objeto.
let trabajador = {
    nombre :'John',
    apellido : 'Snow',
    rango : 'Gerente',
    nombreCompletos : function(sexo, telefono){
        return this.nombre + " " +
        this.apellido + " " + telefono + " " + 
        sexo;
    }
}

let usuario = {
    nombre : 'Miguel',
    apellido : 'Ramirez',
    favoritos : 'No',
    get favoritos(){
        return this.favoritos
    },
    set favoritos(favoritos){
        favoritos = this.favoritos;  
    }
}

//-----------------------------------------
//USO DE CALL para usar el metodo nombreCompletos
//que se ubica en trabajador con los datos de usuario
console.log(trabajador.nombreCompletos());

//Sintaxis para el uso del CALL
let userName = trabajador.nombreCompletos.call(usuario);
console.log(userName);

//Paso de argumentos con call
//Se agrego parametros en la funcion nombresCompletos
//por eso hay undefineds
console.log(trabajador.nombreCompletos());

//Agregado para el mismo objeto
console.log(trabajador.nombreCompletos('M',34567));

//Agregado para el otro objeto que uso el CALL
//Se pone .call(objeto, argum1, argum2, ...).
let nomCom = trabajador.nombreCompletos.call(usuario, 'M', 12345);
console.log(nomCom);


//-----------------------------------------

let trabajador1 = {
    nombre :'John',
    apellido : 'Snow',
    rango : 'Gerente',
    nombreCompleto : function(sexo, telefono){
        return this.nombre + " " +
        this.apellido + " " + telefono + " " + 
        sexo;
    }
}

let usuario1 = {
    nombre : 'Miguel',
    apellido : 'Ramirez',
    favoritos : 'No',
    get favoritos(){
        return this.favoritos
    },
    set favoritos(favoritos){
        favoritos = this.favoritos;  
    }
}

/*Apply : Usado para mandar a llamar un metodo 
    que este no posea desde otro metodo.
Ejm: */
console.log(trabajador1.nombreCompleto());

//uso de apply
let nc = trabajador1.nombreCompleto.apply(usuario1);
console.log (nc);

//Ingresando parametros en la funcion nombreCompleto:
let ncT1 = trabajador1.nombreCompleto('M',1234);
console.log(ncT1);

//Crear el arreglo con los argumentos a pasar 
let array1 = ['M', 0987];
let ncU1 = trabajador1.nombreCompleto.apply(usuario1, array1);
console.log(ncU1);
/*apply usa un arreglo para pasar los argumentos de los 
parametros en la funcion que se desea ejecutar y que no este 
definido en ese objeto.*/

//-------------------------------------

