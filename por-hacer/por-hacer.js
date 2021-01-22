const fs = require('fs');
//const ruta = require('../db/data.json')

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFileSync('db/data.json', data, err =>{
        if(err)
            throw new Error('No se pudo grabar')
        else
            console.log('Tarea guardada correctamente')
    })
}

const cargarDB = () => {
    
    try{
        listadoPorHacer = require('../db/data.json')
    }catch ( error ){
        listadoPorHacer = []
    }
    
}

const crear = (descripcion) => {
    
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB()

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    })

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(element => element.descripcion !== descripcion);
    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado
        guardarDB();
        return true;
    }
    

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}