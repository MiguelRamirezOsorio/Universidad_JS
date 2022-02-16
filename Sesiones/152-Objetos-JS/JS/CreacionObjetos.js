
//Creacion de objetos en base a "new Object"
//Reservando espacio de memoria para la creacion del objeto
//Se crea un objeto en memoria vacio
let persona = new Object();

persona.nombre = 'Carlos';
persona.edad = '27';
persona.telefono = 3456789021;
persona.direccion = 'Calle Hawaii 148';

console.log(persona.nombre);
console.log(persona.edad);
//OBS : no es la mejor sintaxis para la creacion de objetos.

//Mejor sintaxis:
let persona1 = {
    nombre:'Paco',
    edad : '54',
    telefono : 456789032,
    direccion :'Calle Hawai 148'
}

//Acceder a las propiedades del objeto:
//Mediante el uso de corchetes:
console.log(persona1["nombre"]);

//Recorrer las propiedades de un objeto:
//Uso del for in
for(Nombrepropiedad in persona1){
    console.log(Nombrepropiedad);
    console.log(persona1[Nombrepropiedad]);
}

for (propiedades in persona){
    console.log(persona[propiedades]);
}


const gato = {
    genero : 'feliz',
    especie : 'familiaris',
    nombre : 'gato comun',
    edadMaxima : function(peso,talla){
        if(peso >= 30){
            return "edad maxima :" + ((peso/4) + (talla/4));   
        }
        else{
            return "edad maxima : "+ ((peso/2) +(talla/2));
        }
    }
}

console.log(gato.edadMaxima(20,48))

for (prop in gato){
    console.log(gato[prop]);
}

//Agregar y eliminar propiedades
let cliente = {
    nombre: 'Raul',
    apellido : 'Tazo',
    telefono: 234987568,
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}


/*Agregar propiedades
solo debes poner objeto.NuevaPropiedad*/
cliente.email = 'rauTazo@gmail.com';
cliente.ema1l = 'raulTaza@gmail.com'; //ups me equivoque era email
console.log(cliente);



/*Eliminar propiedades
debes poner delete objeto.NombrePropiedad
borrando ema1l*/
delete cliente.ema1l;
console.log(cliente)


//Formas de imprimir un object en JS
//con el objeto total
console.log(cliente);

//concatenar cada valor de cada propiedad
console.log(
    cliente.nombre + ", " +
    cliente.apellido + ", " +
    cliente.telefono + ", " +
    cliente.email);

//Iterar usando for in
for (NombreP in cliente){
    console.log(cliente[NombreP]);
}

//Usando la sintaxis de object.values

let clienteArray = Object.values(cliente);
console.log(clienteArray);

//Usando JSON.stringify (adecuado para objetos)
let clienteString = JSON.stringify(cliente);
console.log(clienteString);


