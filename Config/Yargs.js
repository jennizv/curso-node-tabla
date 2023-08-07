const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
         alias: 'base',
         type: 'number',
         demandOption: true,
         describe: 'Es la base de la multiplicacion'
     })
    .check((argv, options) => {
        if(isNaN(argv.b)){
        throw 'La base debe ser un numero'
        }
        return true;
    })
    .option('l', {
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la multiplicacion en consola'
    })
    .option('h', {
        alias:'hasta',
        type:'number',
        demandOption: false,
        describe: 'Cuantas multiplicaciones hara'
    })
    .argv;

module.exports = argv;