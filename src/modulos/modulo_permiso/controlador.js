const db = require('../../DB/mysql');

const tabla = 'tbl_modulo_permiso'

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
    let query = `UPDATE ${tabla} SET Id_modulo = ${body.Id_modulo}, Id_permiso = ${body.Id_permiso}                                
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Id_modulo, Id_permiso) 
                                       VALUES (${body.Id_modulo}, ${body.Id_permiso})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}