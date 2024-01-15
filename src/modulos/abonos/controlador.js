const db = require('../../DB/mysql');

const tabla = 'tbl_abonos'

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
    let query = `UPDATE ${tabla} SET Id_cuenta_cobro = ${body.Id_cuenta_cobro}, Valor = ${body.Valor}, Fecha_registro = ${body.Fecha_registro} 
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Id_cuenta_cobro,Valor,Fecha_registro) VALUES (${body.Id_cuenta_cobro}, ${body.Valor}, ${body.Fecha_registro})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}