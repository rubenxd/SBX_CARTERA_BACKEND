const db = require('../../DB/mysql');

const tabla = 'tbl_tipo_identificacion'

function todos(){
    return db.todos(tabla);
}

function uno(id){
    return db.uno(tabla, id);
}

function eliminar(body){
    return db.eliminar(tabla, body);
}

function actualizar(tabla,body){
    let query = `UPDATE ${tabla} SET Nombre = ${body.Nombre}, Descripcion = ${body.Descripcion}                               
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Nombre, Descripcion) 
                                       VALUES (${body.Nombre}, ${body.Descripcion})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}