//Loops

//For, While, Do while

for(let i = 5; i <= 10; i++){
    console.log(i)
}

//While
console.log("------------------")
let numero = 10;
while(numero >= 1){
    console.log(numero)
    //break; //Salida Funcional
    numero-- //Salida Logica
}

//Do - While
console.log("------------------")
let doNumero = 6;
do{
    console.log(doNumero)
    doNumero++;
} while(doNumero <= 5)

// Ejercicio:  contador del 2 al 20 pero que sume de 2 en 2
// Ejemplo: 2, 4, 6 , 8....

console.log("------------------")
for(let i = 2; i <= 20; i+=2){
    console.log(i)
}