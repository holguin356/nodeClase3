setTimeout(()=> {
},2000); //2000 milisegundos 2 segundoss

let contador = 0;
const intervalo = setInterval(() => {
    console.log(`repetición número: ${++contador}`);
    if (contador == 5) {
        clearInterval(intervalo); // Detiene el intervalo        
    }
}, 3000);

//ejecuta una funcion

setImmediate(() => {
    console.log("este mensaje se reproduce inmediatamente se termine el anterior proceso")
})

console.log("este mensaje se reproduce primero que set inmediate")