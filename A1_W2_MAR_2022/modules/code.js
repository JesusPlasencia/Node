// console.log('Another Javascript file.');
let promedio = 20;
// module.exports.promedio = promedio;

// function saludar()
// {
//     console.log('My name is Jesus');
// }

// module.exports.saludar = saludar();

module.exports = 
{
    prom : promedio,
    saludar : () =>
    {
        console.log('Hello World!');
    },
    sumar : (a , b) =>
    {
        return a + b;
    }
}

