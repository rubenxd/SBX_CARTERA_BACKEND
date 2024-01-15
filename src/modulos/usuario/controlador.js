const db = require('../../DB/mysql');

const tabla = 'tbl_usuario'

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
    let query = `UPDATE ${tabla} SET Usuario = ${body.Usuario}, 
                                     Contrasena = ${body.Contrasena},
                                     Id_persona = ${body.Id_persona},
                                     Id_rol =  ${body.Id_rol},                            
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Usuario, 
                                       Contrasena,
                                       Id_persona,
                                       Id_rol) 
                                       VALUES (
                                        ${body.Usuario}, 
                                        ${body.Contrasena}, 
                                        ${body.Id_persona}, 
                                        ${body.Id_rol})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}