//LODASH
const _ = require('lodash');
const argv = require('yargs').argv;

// let resultado = _.assign(x, y);
// console.log(resultado);

// _.times(3, ()=> console.log('Hola'));

//Encontrar elemento en el JSON
// let result = _.find(z, {name:"Angel"});
// console.log(result);

//YARGS
if(argv.usuario === 'Jesus')
{
    let x = { "name" : "Jesus"}
    let y = { "hobby" : "Program"}
    let z = 
    [
        { name : "Jesus Manuel", last : "Plasencia Toledo", age : 20},
        { name : "Angel", last : "Toledo", age : 16}
    ]
    let resultado = _.find(z, {name : "Jesus Manuel", last: "Plasencia Toledo"});
    console.log(resultado);
}
else
{
    console.log('Usuario no válido');
}




