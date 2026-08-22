//Funciones

/*
    Una funcion es un bloque de codigo que se puede reutilar
    Sirve para:
    - Organizar codigo
    - Evitar repetir logica
    - Ejecutar una tarea especifica
*/
function saludar(){
    console.log("Hola alumnos de Sensei Tech")
}

//Para ejecutar la funcion hay que llamarta
saludar();

//Funciones con parametros
function saludarPersona(nombre){
    console.log ("Hola " , nombre)
}
saludarPersona("Enrique")
saludarPersona("Alejandro")
saludarPersona("Luis")

//Funciones que retornan valores
function sumar(num1, num2,){
    return num1 + num2;
}

let resultado = sumar(45,78)
console.log("El resultado es: ",resultado)
let resultado2 = sumar(234,7238)
console.log("El resultado es: ",resultado2)

//Arrow functions (Muy usadas en Playwright)
const multiplicar = (a,b) => {
    return a * b;
}
console.log("Multiplicacion: ", multiplicar (4,5))

//Ejercicio
//Crear una funcion llamada mostrarEdad que reciba un numero
// Y muestr en consola "Tu edad es X"