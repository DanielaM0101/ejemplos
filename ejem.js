
//Iterables
let str = "Hello";   // declara una variable str y le asigna el valor de la cadena "Hello".


let iterator = str[Symbol.iterator]();     // crea un iterador para la cadena str

//se inicia un bucle while (true) que se ejecutará indefinidamente hasta que se rompa explícitamente con la instrucción break.

while (true) {       // se llama al método next() del iterador mediante la línea let result = iterator.next();
    let result = iterator.next();     //El método next() devuelve un objeto con dos propiedades: value y done.
    if (result.done) break;          //La propiedad done es un booleano que indica si la iteración ha terminado o no.
    alert(result.value);              //Se verifica si result.done es true utilizando la instrucción if (result.done) break;. 
}    //se muestra el valor actual del carácter utilizando la función alert(result.value);.


//Map y Set

let john = { name: "John" };      //declara un objeto llamado john 

let visitsCountMap = new Map();      //crea un nuevo objeto Map llamado visitsCountMap

visitsCountMap.set(john, 123);       //asignar un valor a la clave john.  123

alert(visitsCountMap.get(john));     //método get() del Map para obtener el valor asociado a la clave john
//muestra el valor 123 utilizando la función alert().


//Object.keys, values, entries
let user = {
    name: "John",           //declara un objeto llamado user con dos propiedades
    age: 30
};


for (let value of Object.values(user)) {    // indica que se va a iterar sobre cada valor del objeto user.
    alert(value);                               // muestra el valor actual en cada iteración.
}

//Asignación desestructurante

let arr = ["John", "Smith"]    //declara un array llamado arr con dos elementos


let [firstName, surname] = arr;     //se utiliza la sintaxis de la destructuración de arrays 

alert(firstName);     //se utilizan las funciones alert() para mostrar los valores de las variables
alert(surname);

//Fecha y Hora

let d1 = new Date(2012, 1, 20, 3, 12);    //crea un objeto Date llamado d1 con la fecha y hora especificadas
alert(d1);   //muestra el valor del objeto d1 en una ventana emergente.


//Métodos JSON, toJSON

let room = {                                  //crea un objeto meetup que contiene propiedades como title, date, y room
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),         //convertir el objeto meetup en una cadena JSON 
    room                                          // muestra esa cadena utilizando la función alert().
  };
  
  alert( JSON.stringify(meetup) );