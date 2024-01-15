const express = require('express');
const config = require('./config');

const abonos = require('./modulos/abonos/rutas');
const ciudad = require('./modulos/ciudad/rutas');
const clientes = require('./modulos/clientes/rutas');
const compania = require('./modulos/compania/rutas');
const cuentas_por_cobrar = require('./modulos/cuentas_por_cobrar/rutas');
const departamento = require('./modulos/departamento/rutas');
const estado = require('./modulos/estado/rutas');
const modulo = require('./modulos/modulo/rutas');
const modulo_permiso = require('./modulos/modulo_permiso/rutas');
const modulo_permiso_rol = require('./modulos/modulo_permiso_rol/rutas');
const pais = require('./modulos/pais/rutas');
const periodicidad_pago = require('./modulos/periodicidad_pago/rutas');
const permiso = require('./modulos/permiso/rutas');
const persona = require('./modulos/persona/rutas');
const rol = require('./modulos/rol/rutas');
const tipo_identificacion = require('./modulos/tipo_identificacion/rutas');
const usuario = require('./modulos/usuario/rutas');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port);

//rutas
app.use('/api/abonos',abonos);
app.use('/api/ciudad',ciudad);
app.use('/api/clientes',clientes);
app.use('/api/compania',compania);
app.use('/api/cuentas_por_cobrar',cuentas_por_cobrar);
app.use('/api/departamento',departamento);
app.use('/api/estado',estado);
app.use('/api/modulo',modulo);
app.use('/api/modulo_permiso',modulo_permiso);
app.use('/api/modulo_permiso_rol',modulo_permiso_rol);
app.use('/api/pais',pais);
app.use('/api/periodicidad_pago',periodicidad_pago);
app.use('/api/permiso',permiso);
app.use('/api/persona',persona);
app.use('/api/rol',rol);
app.use('/api/tipo_identificacion',tipo_identificacion);
app.use('/api/usuario',usuario);

module.exports = app;