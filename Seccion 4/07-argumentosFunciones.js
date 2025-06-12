function mensaje3 (){ 
    return 'Mensaje como devolución de la funcion';//En este caso estamos definiendo que cuando llamemos nuestra funcion nos devuelva cierto valor (en este caso texto)
    }


var msj2 = mensaje3() /*Ahora definimos una variable que sera equivalente a nuestra funcion para poder llamarla y que nos devuelva el valor que establecimos anteriormente*/
console.log (msj2)

//Podemos crear funciones donde podemos tener uno o varios argumentos

function sumar (a, b, c){
    return a + b + c;
}

var result = sumar (4, 5, 8);
console.log (result);

//************************************************************************************************************
console.log ('*****************************************************************');

//Tambien podemos crear argumentos opcionales

function sumar1 (a, b, c=3){ //En este caso para hacer opcional el valor de C le asignamos un valor especifico
    return a + b + c;
}
var result = sumar1 (4, 5, 8); /* En este caso como estamos enviando un tercer argumento, automaticamente JS lo aplica a "c" a pesar que ya lo habiamos definido, ya que al definir
una funcion esta es opcional solo en caso que no asignemos un valor, en el siguiente ejemplo no asignamos valor y automaticamente se establece el valor que definimos al inicio*/
console.log (result);
var result1 = sumar1 (3, 7); /* Cuando llamamos la funcion solo enviamos 2 argumentos, al no enviar el tercero JS entiende que es opcional, pero al ser opcional tambien tiene
un valor establecido que en este caso es 3, por lo tanto tambien lo aplica en la operacion*/
console.log (result1);

//Se me ocurre que al ser asi podriamos definir "c=0" para poder enviar un argumento y asignar el valor a nuestro antojo, y en caso de no asignarle que no cambie el resultado, lo hare en el siguiente ej

function sumar2 (d, e, f=0){
    return d + e + f;
}

var result2 = sumar2 (1, 5, 2);
console.log (result2);
var result3 = sumar2 (1, 5);
console.log (result3);

// De esta forma solo utilizamos el tercer valor cuando sea necesario y no nos altera el resultado

//Tambien podemos crear lo que son "Funciones anonimas" que basicamente definimos una variable como nuestra funcion y el resultado es el mismo

var sumar3 = function (a, b, c=3){
    return a + b + c;
}

var result = sumar3 (4, 5, 8);
var result1 = sumar3 (3, 7);
console.log (result);
console.log (result1);
