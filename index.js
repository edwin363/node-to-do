//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const color = require('colors')

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch( comando ) {
    case 'crear':
        let tarea = porHacer.crear( argv.description  );
        //console.log(tarea)
    break;
    
    case 'listar':
        let listado = porHacer.getListado();
        for( let tarea of listado ){
             console.log(color.green('=======Por Hacer======'));
             console.log(tarea.descripcion);
             console.log('Estado: ', tarea.completado)
             console.log(color.green('======================='));
        }

        //console.log('Mostrar todas las tareas por hacer')

    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado)
    break;

    case 'borrar':
        let borrando = porHacer.borrar(argv.description);
        console.log(borrando);
    break

    default:
        console.log('Comando no reconocido')
}