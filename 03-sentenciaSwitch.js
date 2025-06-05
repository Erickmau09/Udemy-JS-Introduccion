//Sentencia Switch

/*Evalua el valor de una variable con diferentes casos de posibles valores
que puede tener esa variable en un tiempo determinado*/

var mes = 6;

switch (mes){ //Switch evalua una variable, en este caso 'mes'
    case 1:
        console.log ('Enero');
        break; //Esta instruccion hace un corte, por lo tanto si el mes vale el valor actual ya no consulta los demas casos
    case 2:
        console.log ('Febrero');
        break;
    case 3:
        console.log ('Marzo');
        break;
    case 4:
        console.log ('Abril');
        break;
    case 5:
        console.log ('Mayo');
        break;
    default:
        console.log ('Mes no encontrado.');
}

