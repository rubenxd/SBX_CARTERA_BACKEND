const db = require('../../DB/mysql');

const tabla = 'tbl_compania'

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
    let query = `UPDATE ${tabla} SET Id_Tipo_identificacion = ${body.Id_Tipo_identificacion}, 
                                     Identificacion = ${body.Identificacion}, 
                                     Nombre = ${body.Nombre},
                                     Telefono = ${body.Telefono},
                                     Celular = ${body.Celular},
                                     Email = ${body.Email},
                                     Direccion = ${body.Direccion},
                                     Id_ciudad = ${body.Id_ciudad},
                                     Id_departamento = ${body.Id_departamento},
                                     Id_pais = ${body.Id_pais}
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Id_Tipo_identificacion,
                                       Identificacion,
                                       Nombre,
                                       Telefono,
                                       Celular,
                                       Email,
                                       Direccion,
                                       Id_ciudad,
                                       Id_departamento,
                                       Id_pais) 
                                       VALUES 
                                       (${body.Id_Tipo_identificacion}, 
                                        ${body.Identificacion}, 
                                        ${body.Nombre},
                                        ${body.Telefono},
                                        ${body.Celular},
                                        ${body.Email},
                                        ${body.Direccion},
                                        ${body.Id_ciudad},
                                        ${body.Id_departamento},
                                        ${body.Id_pais})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}