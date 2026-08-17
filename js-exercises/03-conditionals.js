//Condicionales

//IF-ELSE

let calificacion = 100; //Integer

if(calificacion >= 90){
    console.log("Excelente"); //Condicion verdadera
} else if(calificacion >= 70){
    console.log("Aprobado")
} else{
    console.log("Reprobado")
}

// Codificar un programa usando IF else para si una persona es mayor de edad

// 1. Saber la edad la persona
// 2. Despues evaluar la edad para saber en que rango esta, mayor edad, menor edad, adulto mayor
// 3. Mayor edad > 18
// 4. Adulto mayor > 65
// 5. Si los 3 y 4 son falsos, es menor edad

let edad = 21;

if(edad < 18){
    console.log("Menor de edad")
}else if(edad >= 65){
    console.log("Es adulto Mayor")
}else{
    console.log("Es mayor de edad")
}

//Switch Case
let option = 3;

switch(option){
    case 1:
    case 6:
        //Code
        console.log("Maximizar pantalla")
        break;
    case 2:
    case 5:
        console.log("Minizar pantalla")
        break;
    case 3:
        console.log("Cerrar pantalla")
        break;
    default:
        console.log("Opcion invalida")
}

//Ejercicio Swithc Case: dias de la semana
let dia = "Lunes";

switch(dia){
    case "Lunes":
        console.log(1)
        break;
    case "Martes":
        console.log(2)
        break;
}

//Operadores comparti y logico
if(true && true){
    console.log("AND")
}else{
    console.log("No se cumplio el operador logico")
}

//Opereador ternario (TIP)

let edad2 = 15

let mensaje = edad2 >=18 ? "Mayor de edad" : "Menord de edad";
//              Condicion.       TRUE.           FALSE.

console.log(mensaje);