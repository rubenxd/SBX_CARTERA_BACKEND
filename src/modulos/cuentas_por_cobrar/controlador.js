const db = require('../../DB/mysql');

const tabla = 'tbl_cuentas_por_cobrar'

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
    let query = `UPDATE ${tabla} SET Numero_factura = ${body.Numero_factura}, 
                                     Id_cliente = ${body.Id_cliente}, 
                                     FechaInicio = ${body.FechaInicio},
                                     FechaFin = ${body.FechaFin},
                                     Valor = ${body.Valor},
                                     Id_periodicidad_pago = ${body.Id_periodicidad_pago},
                                     Fecha_registro = ${body.Fecha_registro}                                    
                 WHERE Id = ${body.Id}`;
    return db.actualizar(query);
}

function agregar(tabla,body){
    let query = `INSERT INTO ${tabla} (Numero_factura,
                                       Id_cliente,
                                       FechaInicio,
                                       FechaFin,
                                       Valor,
                                       Id_periodicidad_pago,
                                       Fecha_registro) 
                                       VALUES 
                                       (${body.Numero_factura}, 
                                        ${body.Id_cliente}, 
                                        ${body.FechaInicio},
                                        ${body.FechaFin},
                                        ${body.Valor},
                                        ${body.Id_periodicidad_pago},
                                        ${body.Fecha_registro})`;
    return db.agregar(query);
}

module.exports = {
    todos,
    uno,
    eliminar,
    actualizar,
    agregar
}