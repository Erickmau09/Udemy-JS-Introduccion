//Funciones

/* Las funciones son uno de los pilares fundamentales de JS. Una funcion es un procedimiento em JS
un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una funcion, debe definirla en algun lugar
del ambito desde el cual desea llamarla

El uso de metodos o funciones ayudan mucho a estructurar nuestro codigo para que tenga bloques de algoritmos.
Estos algoritmos normalmente son pequeños procedimiento para realizar una tarea especifica.*/



function mensaje1 (){ //Definimos el nombre de la funcion con la cual sera llamada
    console.log ('Mensaje desde la función'); //Aunque lo imprimamos en consola de momento no hace nada, porque para que haga algo tengo que llamar esa funcion
}

mensaje1 (); //Para ello llamamos la funcion llamada mensaje1 junto con () para que JS sepa que es una funcion

console.log ('********************************************'); // "separadores"

/* Se nos dice que la mejor practica de una funcion es que nos devuelva un valor, para eso vamos a definir una variable como nuestra funcion*/

function mensaje2 (msj){ 
    console.log (msj);
    }


var msj = 'Mensaje como argumento de la funcion' //Enviamos como argumento a la funcion
mensaje2 (msj);

console.log ('********************************************'); // "separadores"

//Haremos que la funcion al definirle una variable nos devuelva un valor, o en este caso un texto

function mensaje3 (){ 
    return 'Mensaje como devolución de la funcion';
    }


var msj2 = mensaje3() 
console.log (msj2)

// DUDA SOBRE TODO EL TEMA DE LAS FUCNIONES