const db = require('../../DB/mysql');

const tabla = 'tbl_modulo_permiso_rol'

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
    let query = `UPDATE ${tabla} SET Id_modulo_permiso = ${body.Id_modulo_permiso}, Id_rol = ${body.Id_rol}                                
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Id_modulo_permiso, Id_rol) 
                                       VALUES (${body.Id_modulo_permiso}, ${body.Id_rol})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}