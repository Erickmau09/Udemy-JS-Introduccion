//If anidados
//AND && True si todo es true
//OR || True si uno es true
//NOT ! Invierte true/false

var nombre = 'Erick';
var edad = 27;

// edad < 12 es un niño
// edad > 11 y < 18 es un adolescente
// edad > 17 y < 60 es un adulto
// edad > 60 es un anciano

if (edad < 12){
    console.log (nombre + ' es un niño.');} 
    else if ((edad > 11) && (edad < 18)) //Utilizamos else if para poner una doble condicion
        {console.log (nombre + ' es un adolescente.');} 
    else if ((edad > 17) && (edad < 60)) //Al igual que la primera condicion utilizamos el condicional && ya que ambas tienen que ser true
        {console.log (nombre + ' es un adulto.');} 
    else {console.log (nombre + ' es un anciano.');}