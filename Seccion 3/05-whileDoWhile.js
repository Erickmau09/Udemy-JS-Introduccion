//Sentencia While, Do while (mientras)

var i = 1;
while (i <= 10){
    console.log (i);/* Se establece una condicion que en caso de cumplirse se ejecute el codigo,
                    sin embargo necesitamos que nuestra variable vaya cambiando, por que de no cambiarse se crea un bucle infinito*/
i++;                /* Para evitar eso se utiliza un operador unario, por cada iteacion el valor de i va a ir cambiando hasta que se cumpla la condicion*/
} 

console.log (i); // La variable termina en 11 y es cuando se termina la iteracion

/* Tiene la misma logica de for pero se hace en diferentes secciones
primero se declara la variable, luego se pone la condicion que va a evaluar esa varibale
pero internamente tenemos que hacer que en algun momento esa condicion se vuelva falsa para evitar un bucle infinito.

DUDA: CUANDO UTILIZAR FOR Y CUANDO WHILE*********/

console.log ('*********************************************************************');

// Sentencia Do..While
console.log ('Sentencia Do..While')
// Tambien sirve para hacer iteraciones pero con la diferencia que el do while si o si se tiene que ejecutar aunque sea una vez

var i = 11;
do {
    console.log (i);
    i++;
} while (i <= 10);
console.log (i); /* A diferencia del While que necesita que la condicion inicial al momento de ser
evaluada al inicio se cumpla para realizar la iteracion, el do while si o si se ejecuta ya que la condicion esta al final de la iteracion*/
