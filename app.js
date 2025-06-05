//Uso de variables
/*var nombre = 'Erick';
console.log (nombre);
console.log (typeof(nombre));


var edad = 34;
console.log (edad);
console.log (typeof(edad));

edad = 'Cinco';
console.log (edad);
console.log (typeof(edad));

var sueldo = 1900.99
console.log (sueldo);
console.log (typeof(sueldo));


var tieneTrabajo = false;
console.log (tieneTrabajo);
console.log (typeof (tieneTrabajo));


var puestoDeTrabajo;
console.log (puestoDeTrabajo);
puestoDeTrabajo = null;
console.log (puestoDeTrabajo);
**********************************************************/

//Operadores matematicos +, -, *, /

/*var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log ('La diferencia de sus edades son: ' + diferenciaEdad);
console.log (sumaEdades);
console.log ('Año en que nació Ana ' + yearAna);
console.log ('Año en que nació Maria ' + yearMaria);
console.log (yearActual * 5);
console.log (yearActual / 2);
console.log (typeof ('Año en que nació Ana ' + yearAna));  
*********************************************************************/


//Operadores logicos, unarios y de asignacion

/*Logicos < > <= >= == son muy utilizados para hacer comparaciones,
para saber si una variable es verdadera o falsa etc*/

var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;

var mayorAna = edadAna > edadMaria;
console.log (mayorAna); //Nos preguntamos si la edad de Ana es MAYOR que la de Maria, por lo tanto True

var mayorAna = edadAna < edadMaria;
console.log (mayorAna); //Nos preguntamos si la edad de Ana es MENOR que la de Maria, por lo tanto False

var mayorAna = edadAna == edadMaria;
console.log (mayorAna); //Nos preguntamos si la edad de Ana es IGUAL que la de Maria, por lo tanto False

var mayorAna = !(edadAna == edadMaria);
console.log (mayorAna); /*! Es un operador de negacion, ya sabemos que == es false en este caso,
al aplicarle el operador de negacion nos devuelve lo contrario, en este caso TRUE*/



//Unarios, ++Incremento, --Decremento

edadAna++; /*La edadAna es de 34, al aplicar el operador unario de incremento
aumentamos el valor de la variable en +1 por eso nos devuelve 35*/

console.log (edadAna);

console.log(edadAna++);/*Cuando aplicamos el operador ++ al final de la variable en el console no hace la suma en el momento,
el console busca el operador y lo encuentra al final, por lo tanto aplica el incremento en la siguiente instruccion*/

console.log(edadAna); //nos devuelve 36

console.log (++edadAna);//En este caso si aplica el incremento en esta interaccion ya que el operador ++ va al incio

console.log(--edadAna);

//Asignacion, +=, -=, *=, /=, %=

var a = 11;
var b = 5;

var c = a % 5; //Residuo o resto de una division
console.log (c);

a += b; /*Se suma a "a" una asignacion con el valor de b, 
es la misma logica para los demas, nos acorta codigo al hacer las operacion mas cortas*/
console.log (a);





