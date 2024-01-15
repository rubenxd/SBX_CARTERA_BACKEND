const mysql = require('mysql');
const config = require('../config');
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conmysql(){
    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err)=>{
        if(err){
            console.log(['db err'], err);
            setTimeout(conmysql, 200);
        }else{
            console.log('DB Conectada')
        }
    });

    conexion.on('error', err => {
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conmysql();
        }else{
            throw err;
        }
    });
}

conmysql();

function todos(tabla){
    return new Promise((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`,(error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

function uno(tabla, id){
    return new Promise((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE Id = ${id}`,(error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

function agregar(query){
    return new Promise((resolve, reject)=>{
        conexion.query(query,(error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

function eliminar(tabla, data){
    return new Promise((resolve, reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE Id = ? `,data.Id,(error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

function actualizar(query){
    return new Promise((resolve, reject)=>{
        conexion.query(query,(error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    });
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
    actualizar,
}