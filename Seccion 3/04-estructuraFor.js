// Estructura For (sentencias repetitivas o condicionales)
/* La sentencia For nos ayuda a hacer iteraciones de un bloque de codigo de acuerdo a una cantidad de veces
que nosotros le indicamos. Crea un bucle que consiste en tres expresiones opcionales,
encerradas en parentesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle*/

// Sintaxis
/* for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
*/

// Como ejemplo me piden que escriba los numeros del 1 al 10

console.log ('Ejemplo de secuencia del 1 al 10 sumando de uno en uno');

for (var i = 1; i <= 10; i++){ /*Se establece la primera sentencia que i=1, como condicion establecemos que
    mientras i sea menor o igual a 10, en la tercera sentencia se agregara un operador unario para que i aumente
    hasta donde le permita la condicion*/
    console.log (i); // Al cumplir la condicion de la segunda sentencia, el for pasa a la siguiente instruccion
}

console.log ('Ejemplo de secuencia del 1 al 10 sumando de dos en dos');


for (var i = 1; i <= 10; i+=2){
    console.log (i);
}

console.log ('Ejemplo de secuencia del 10 al 1 en bucle reverso');

for (var i = 10; i >= 1; i--){
    console.log (i);
}


