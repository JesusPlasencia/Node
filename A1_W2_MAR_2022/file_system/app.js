const fs = require('fs');

/* ASYNC */
// console.log('Begin');
// fs.readFile('data.txt', 'utf-8', (error, data)=>
// {
//     if(error)
//     {
//         console.log(`Error ${error}`);
//     }
//     else
//     {
//         console.log(data);
//     }
// });
// console.log('End');

/* SYNC */
// console.log('Begin');
// let data = fs.readFileSync('data.txt', 'UTF-8');
// console.log(data);
// console.log('End');

//Renombrando archivo
// fs.rename('data.txt', 'dataNew.txt', (error)=>
// {
//     if(error) throw error;
//     console.log('¡Renombrado!');
// });

/*Añadiendo contenido a un archivo de texto*/
// fs.appendFile('data.txt', ' Welcome to Javascript.', (error)=>
// {
//     if(error) console.log(`Error ${error}`);
// })

/*Eliminando un archivo*/
// fs.unlink('dataTwo.txt', (error)=>
// {
//     if(error) throw error;
//     console.log('Eliminado');
// });

/*Creando un archivo y escribiendo su contenido en base a uno ya existente*/
// fs.createReadStream('data.txt').pipe(fs.createWriteStream('dataCopy.txt'));

/*Leyendo el nombre de las carpetas*/
fs.readdir('../file_system', (error, files)=>
{
    if(error) throw error;
    files.forEach(file =>
        {
            console.log(file);
        })
})