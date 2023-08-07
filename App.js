const { crearArchivo } = require('./Helpers/Multiplicar');
const argv = require('./Config/Yargs');
const colors = require('colors');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArch => console.log(nombreArch.green, 'creado'))
    .catch(err => console.log(err));
