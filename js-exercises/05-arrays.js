//Arrays
let frutas = ["Manzana", "Platano", "Uva", "Naranja"] // Arreglo Strings
console.log(frutas[1]);
console.log(frutas);

let numero = [3,5,6,19,103] // Arreglo de INTs
let bol = [true, true, false, true, false] // Arreglo de booleanos
let formula = [3.14, 5.5, -3.5] // Arreglo flotante numeros reales

frutas.push("Fresa") // Agregar un valor
frutas.pop() // Elimina la ultima posicion del arreglo
frutas.push("Melon")
frutas.shift() // Elimina el primer valor de arreglo - La posicion 0
frutas.unshift("Pera") // Agrega un valor al principio del arreglo - La Posicion 0 

console.log(frutas);
frutas.forEach((index) => {
    console.log("Fruta: " , index)
})

let fruitExist = frutas.includes("Guayaba") // Regresa un valor booleano si el valor existe o no en el arreglo
console.log(fruitExist)

let nuevasFrutas = frutas.slice(2,4)
nuevasFrutas.forEach((index) => {
    console.log("Nueva Fruta " , index)
})

console.log(frutas.join(" , "))

//Ejercicio en clase
let animales = ["Perros", "Gato" , "Conejjo" , "Pez"]

// 1. imprimir todos los valores

// 2. Validar si "Perro" existe

// 3. Agregar un nuevo Animal