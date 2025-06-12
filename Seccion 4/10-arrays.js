// ARREGLOS, ARRAYS O MATRICES

/* Son objetos de tipo lista cuyo prototipo tiene metodos para realizar operaciones de corrido y mutacion.
Ni la longitud o los tipos de los elementos del array son fijos.
Dado que la longitud de un array puede cambiar en cualquier momento, y los datos pueden almacenarse en ubicaciones no contiguas en él,
no se garantiza que los arrays JS sean densos, esto depende de como el programador opte usarlos.

Son un tipo de variable que permite guardar varios datos (un conjunto de datos) que permite realizar cierto tipo de operaciones

Se pueden declarar arreglos de la siguiente manera:

var bebidas = ["Café", "Té", "Limonada"];

var bebidas = new Array ("Café", "Té", "Limonada");
*/

/********************************************************************************/

//FUNCIONES BASICAS CON ARRAYS

var nombres = ['Erick', 'Carlos', 'Ana', 'Luisa']; /*Un array con 4 elementos, cada elemento se separa con una coma, es como una variable que tiene 4 valores al mismo tiempo,
solo que cada uno de estos valores tiene un indice para utilizarlos comenzando desde el indice 0
*/

var vegetales = new Array ('Tomate', 'Lechuga', 'Zanahoria');

console.log (nombres [3]);
console.log (vegetales [1]);

/* De esta forma podemos imprimir en consola el indice del array que seleccionemos
*/

/* Una vez definidos los arrays, podemos modificar el valor de alguno de sus indices de ser necesario
*/

nombres [3] = 'José';
vegetales [1] = 'Nabo';

console.log (nombres [3]);
console.log (vegetales [1]);



console.log ('********************************');
/*********************************************************************** */

console.log (nombres.length); /* La propiedad length nos devuelve la cantidad de elementos que tiene la variable

Si necesitamos recorrer ese array para saber que contiene lo podemos ver con un for
*/

for (var i = 0; i <= nombres.length - 1; i++){ 
    console.log (nombres [i]);
}

/*Otro metodo es el forEach
Con este metodo recorremos el Array y le asigna el numero de indice que corresponde
*/

vegetales.forEach (function (elemento, indice){ /* Lo tenemos que declarar con una funcion*/
    console.log (elemento, indice); 
})



console.log('********************************************************');
/************************************************************************** */

//AGREGAR Y QUITAR ELEMENTOS DE UN ARRAY

console.log (nombres); /*Para agregar un elemento a este arreglo utilizamos el comando ".push"
*/

nombres.push ('Pedro'); /* Lo agrega al final del array*/
console.log (nombres);

/* Tambien podemos agregar un elemento al inicio del arreglo con ".unshift"*/

nombres.unshift ('Lili');
console.log (nombres);

/* Para quitar el ultimo elemento utilizamos ".pop"*/

nombres.pop ();
console.log (nombres);

/* Para quitar el primero elemento utilizamos .shift*/

nombres.shift ();
console.log (nombres);

/* Podemos ver en que indice esta cierto elemento en especifico con ".indexOf"*/

var pos = nombres.indexOf ('Carlos'); /*Tenemos que definir una variable que nos indique esa posicion*/
console.log (pos);

/* Tambien podemos eliminar un elemento intermedio con ".splice" seguido de definir a partir de que indice queremos eliminar y la cantidad a partir de ahi*/

nombres.splice (1, 1); /*Le pido que elimine el elemento numero "x" seguido de una coma y la cantidad de elementos en adelante que quiero borrar a partir de ese, en caso de solo querer eliminar 1, lo dejo en 1*/
console.log (nombres);




console.log ('***************************EJEMPLO******************************');
/********************************************************************* */

// VOY A CREAR UN ARRAY, AGREGA Y ELIMINAR CIERTA CANTIDAD DE EN MEDIO PARA PROBAR

var colores = ['azul', 'rojo', 'verde', 'violeta', 'rosa', 'negro', 'blanco'];

colores.forEach (function (elemento, indice){ 
    console.log (elemento, indice); 
})

colores.push ('gris');
console.log (colores);

colores.unshift ('naranja');
console.log (colores);

var pos1 = colores.indexOf('rosa');
console.log (pos1);

console.log (colores [5]);

colores.splice (5, 1);
console.log (colores);

console.log (colores [5]);

colores.splice (2, 3);
console.log (colores);

colores.splice (1, 4);
console.log (colores);

//DUDA: ES POSIBLE AGREGAR UN ELEMENTO EN UN INDICE ESPECIFICO SIN CAMBIAR O ELIMINAR LOS QUE YA ESTAN?