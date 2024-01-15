const db = require('../../DB/mysql');

const tabla = 'tbl_persona'

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
    let query = `UPDATE ${tabla} SET Id_Tipo_Identificacion = ${body.Id_Tipo_Identificacion},
                                     Identificacion = ${body.Identificacion},
                                     Nombres = ${body.Nombres},
                                     Apellidos = ${body.Apellidos},
                                     FechaNacimiento =  ${body.FechaNacimiento}, 
                                     Celular = ${body.Celular},        
                                     Email = ${body.Email},  
                                     Direccion = ${body.Direccion},     
                                     Id_Ciudad = ${body.Id_Ciudad},
                                     Id_departamento = ${body.Id_departamento}, 
                                     Id_Pais = ${body.Id_Pais},              
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Id_Tipo_Identificacion,
                                       Identificacion,
                                       Nombres,
                                       Apellidos,
                                       FechaNacimiento,
                                       Celular,
                                       Email,
                                       Direccion,
                                       Id_Ciudad,
                                       Id_departamento,
                                       Id_Pais) 
                                       VALUES (
                                        ${body.Id_Tipo_Identificacion},
                                        ${body.Identificacion},
                                        ${body.Nombres},
                                        ${body.Apellidos},
                                        ${body.FechaNacimiento},
                                        ${body.Celular},
                                        ${body.Email},
                                        ${body.Direccion},
                                        ${body.Id_Ciudad},
                                        ${body.Id_departamento},
                                        ${body.Id_Pais})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}