/*
Javascripts se puede ejecutar tareas toman tiempo:
 - llamada API
 - leer archivos
 - cargar pagins web
 - esperar respuesta del servidro
 - query en base de datos
*/

async function saludar(){
    console.log("hola alumnos de senseiTech")
}
saludar();

function esperarDosSegundos(){

    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Termina la espera")
        },4000);
    })
}

async function ejecutarProceso(){
    console.log("iniciando proceso....")

    const resultado = await esperarDosSegundos();

    console.log(resultado);

    console.log("Proceso terminado")
}

ejecutarProceso();

//Ejercicio 1
//Crear una funcion llamda espera3segundos
//que esperar 3 segundos y luego va a imprimi:
// "List de despues de 3 segundos"