//Funciones

/* Las funciones son uno de los pilares fundamentales de JS. Una funcion es un procedimiento em JS
un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una funcion, debe definirla en algun lugar
del ambito desde el cual desea llamarla

El uso de metodos o funciones ayudan mucho a estructurar nuestro codigo para que tenga bloques de algoritmos.
Estos algoritmos normalmente son pequeños procedimiento para realizar una tarea especifica.*/



function mensaje1 (){ //Definimos el nombre de la funcion con la cual sera llamada
    console.log ('Mensaje desde la función'); /*Aunque lo imprimamos en consola de momento no hace nada, porque para que haga algo tengo que llamar esa funcion
por lo tanto aca simplemente estamos definiendo lo que la funcion llamada "mensaje1" hara, que en este caso es "imprimir en consola determinado mensaje"*/
}

mensaje1 (); //Para ello llamamos la funcion llamada mensaje1 junto con () para que JS sepa que es una funcion

console.log ('********************************************'); // "separadores"

/* Se nos dice que la mejor practica de una funcion es que nos devuelva un valor, para eso vamos a definir una variable como nuestra funcion*/

function mensaje2 (msj){ /*Definimos un parametro como variable desde que nombramos la funcion, para que mas adelante podamos enviarle un valor
    con dicha variable a nuestra funcion que esta anclada una con otro, mas no definida desde el incio*/
    console.log (msj);
    }


var msj = 'Mensaje como argumento de la funcion' /*Enviamos como argumento a la funcion, la definimos hasta aca, pero como ya teniamos anclada la variable msj
con nuestra funcion, podemos definirla hasta este momento*/
mensaje2 (msj); //Llamamos nuestra funcion ya con nuestra var definida

console.log ('********************************************'); // "separadores"

//Haremos que la funcion al definirle una variable nos devuelva un valor, o en este caso un texto

function mensaje3 (){ 
    return 'Mensaje como devolución de la funcion';//En este caso estamos definiendo que cuando llamemos nuestra funcion nos devuelva cierto valor (en este caso texto)
    }


var msj2 = mensaje3() /*Ahora definimos una variable que sera equivalente a nuestra funcion para poder llamarla y que nos devuelva el valor que establecimos anteriormente*/
console.log (msj2)

// DUDA SOBRE TODO EL TEMA DE LAS FUNCIONES

