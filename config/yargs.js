const options = {
    crear: {
        description: {
            demand: true,
            alias: 'd',
            describe: 'Agrega una descripcion a la tarea'
        }
    },
    actualizar: {
        description: {
            demand: true,
            alias: 'd',
            describe: 'Agrega una descripcion a la tarea'
        },
        complete: {
            alias: 'c',
            default: true,
            describe: 'Cambia el estado de una tarea a completado o pendiente'
        }
    },
    listar: {
        describe: 'Lista todas las tareas'
    },
    borrar: {
        description: {
            alias: 'd',
            demand: true,
            describe: 'Borra un registro de la base de datos'            
        }
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', options.crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', options.actualizar)
    .command('lista', 'Lista todas las tareas', options.listar)
    .command('borrar', 'Borra un dato de la base de datos', options.borrar)
    .help()
    .argv;

/**
 * description: {
        alias: 'd',
        describe: 'Agrega una descripcion a la tarea'
    },
    complete: {
        alias: 'c',
        default: true,
        describe: 'Cambia el estado de una tarea a completado'
    }
 */

 module.exports = {
     argv
 }