const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar=false, hasta=10) => {
    try {
        let salida='';
        let consola='';

        for(let i=1; i<=hasta ; i++){
            salida += `${base} x ${i} = ${(base * i)}\n`;
            consola += `${base} x ${i} = ${colors.green (base * i)}\n`;
        }
        if(listar){
            console.log(consola);
        }
            fs.writeFileSync(`./Salida/tabla-${base}.txt`, salida);

            return (`tabla-${base}.txt`);
        
        
    } catch (err) {
        throw err;
    }
        
}

module.exports = {
    crearArchivo
}