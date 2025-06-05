/*Sentencias y estructuras de control
-Sentencia if...else
-If anidados
-Sentencia Switch
-Estructura For
-Estructura While y Do...while

***************************************************************/

/*If...Else: Ejecuta una sentencia si una considicon especificada es evaluada como verdadera.
Si la condicion es evaluada como falsa, otra sentencia puede ser ejecutada*/

var nombre = 'Erick';
var esCasado = true; /*Establecemos una condicion para evaluarse, en este caso
se pregunta si Erick es casado, y establecemos en tru o false*/

if (esCasado == true) /*El if evalua una considicon y nos da dos posibles respuestas dependiendo el resultado*/
    {console.log (nombre + ' es casado.');} /*Al abrir los corchetes damos a entender que esa condicion es opcional*/
else {console.log (nombre + ' es soltero.');} /*Aqui establecemos la respuesta contraria de la considicon, en este caso si la respuesta es false*/


