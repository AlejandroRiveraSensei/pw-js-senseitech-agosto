/*
Operadores

1. Operadores Aritmeticos
2. Operadores de Comparacion
3. Operadores Logicos
4. Operadores de Asignacion

*/

// Declaramos 2 variables numericas

let num1 = 10;
let num2 = 5;

// Suma
console.log("Suma: ", num1 + num2); // Resupuesta 15

// Resta
console.log("Resta: ", num1 - num2); //Respuesta 5

//Multiplicacion
console.log("Multiplicacion: ", num1 * num2) //Respuesta 50

//Division
console.log("Division", num1 / num2) // Respuesta 2

//Modulo (Residuo de una division)
console.log("Modulo: ", num1 % num2); //0

//Operadores de comparacion

let edad = 25;

console.log("Edad es igual a 25?", edad == 35);

console.log("Edad es estrictamente igual a 25?", edad === 25); // Comparamos el valor y tipo de variable

console.log("Edad es diferente de 35", edad != 35);

console.log("Edad es mayor que 18?", edad > 18);

console.log("Edad es menor que 18?", edad < 18);

console.log("Edad es mayor o igual que 25?", edad <= 12);

//Operadores de Logicos
// Se usan para combinar condiciones

let tieneLicencia = true;
let tieneAuto = false;

//AND (&&)
// Ambas condiciones deben ser verdaderas:
console.log("puede conducir?", tieneLicencia && tieneAuto);

// OR (||)
// Al menos una condicion debe ser verdadera
console.log("Puede usar transporte?", tieneLicencia || tieneAuto);

//NOT (!)
//invierte el valor booleano
console.log("No tiene auto:", !tieneAuto);

//Operadores de Asignacion
//Asignamos un valir inicial
let puntos = 10;

//Sumamos 5 al valor incial
puntos += 5;
console.log("Puntos de Sumar: ", puntos); //15

puntos -= 3
console.log("Puntos de Restar: ", puntos) //12

//Multiplicacion
puntos *= 2
console.log("Puntos despues de multiplicar", puntos)//24

//Division
puntos /= 4
console.log("Puntos despues de dividi: ", puntos) //6