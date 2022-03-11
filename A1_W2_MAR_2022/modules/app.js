const os = require('os');
const fs = require('fs');
const cd = require('./code.js');

/*IMPORT*/
// let cpu = os.cpus();
// let sistema = os.platform();
// let usuario = os.hostname();

// cd.saludar();
// console.log(cd.prom);

// let cpu_string = JSON.stringify(cpu);
// fs.appendFile('myFile.txt', `Cpu Infomation: ${cpu_string}`, function(error)
// {
//     if(error)
//     {
//         console.log('Error al crear un archivo');
//     }
    
// });
// console.log(cpu);
// console.log(sistema);
// console.log(usuario);

let rpta = cd.sumar(10, 5);
console.log(rpta);