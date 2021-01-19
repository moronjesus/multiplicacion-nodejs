const  argv  = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

/* let base = '5'; */


/* const data = process.argv; */
/* const parametro = data[2].split('=');
const base = parametro[1]; */

let comando = argv._[0];


switch (comando) {
    
    case 'crear':
        
       return crearArchivo( argv.base, argv.limite ).then( ( archivo )=>{
            console.log(archivo);
        
        }).catch((e) =>{
        
            console.log(e);
        });
    
    case 'listar':
        const data = listar(argv.base, argv.limite)
        return  console.log(data);

    default:
        console.log('no existe ninguna accion');;
}

/* console.log( argv.base );
console.log( argv.limite);
 */

 