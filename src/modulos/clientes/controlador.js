const db = require('../../DB/mysql');

const tabla = 'tbl_cliente'

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
    let query = `UPDATE ${tabla} SET Id_persona = ${body.Id_persona}, Id_estado = ${body.Id_estado}, Fecha_registro = ${body.Fecha_registro}
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Id_persona,Id_estado,Fecha_registro) VALUES (${body.Id_persona}, ${body.Id_estado}, ${body.Fecha_registro})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}