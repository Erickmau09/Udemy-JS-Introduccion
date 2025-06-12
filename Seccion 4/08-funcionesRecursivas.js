/*La recursividad consiste en poder llamar a funciones por si mismas, es decir que esta funcion en si misma en sus sentencias
va a tener un llamado a la misma funcion, esta va a tener que terminar en algun punto hasta tener un resultado especifico*/

// FUNCIONES RECURSIVAS

var factorial = function (n){ //Definimos nuestra variable como una funcion
    if ((n==0) || (n==1)) // Se pregunta el codigo si n es igual a 0 ó 1
        return 1; // De ser asi nos retorna el valor de 1
    else
        return (n * factorial (n - 1)); //Caso contrario multiplica n por el factorial de n-1, lo que envia la operacion al inicio de la funcion hasta cumplir cierta condicion que en este caso es n==1 || n==0
}

console.log (factorial(5));

// factorial (5) = 5 * factorial (4) = 5 * 24 * factorial (3)...