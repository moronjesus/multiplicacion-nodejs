const fs = require('fs');
const colors = require('colors');

let data = '';

const listar = ( base, limite= 10 ) =>{

    
    console.log('========================='.green);
    console.log(`tabla de multiplicar:${ base}`.green);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++) {
   
        data += `${base} * ${i} = ${base * i}\n`
    }

    return data
}

const crearArchivo = ( base, limite ) =>{


    return new Promise((resolve, reject) =>{

        if(!Number( base ) ){
            reject(`Error al introducir ${ base}, no es un número`);
            return
        }

        for (let i = 1; i <= limite; i++) {
   
            data += `${base} * ${i} = ${base * i}\n`
        }
          
      
        fs.writeFile(`tablas/tablaMultiplicar-${limite}.txt`, data, (err) => {

          if (err)
          reject(err)
          else{
            resolve(`Archivo creado:  tabla-${colors.red( base )}`) 
          } ;
       
        });


    })

};

module.exports = {

    crearArchivo,
    listar,
}

