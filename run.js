// Dependências
var express = require('express'),
    app = express()


// Variáveis globais para facilitar caminho das pastas 

/**
 * Pasta principal do sistema
 * @type {String}
 */
global.ROOT = __dirname

/**
 * Pastas principais do sistema
 * @type {Function}
 */
global.PATHS = require('./config/require_routes')(ROOT)

//
var config = require(PATHS('CONFIG')+'/config')
var bootstrap = require(PATHS('CONFIG')+'/bootstrap')(app)
var routes = require(PATHS('CONFIG')+'/routes')(app)

//
var server = app.listen(config.port || 3000,function(){
    console.log('Servidor Iniciado')
}); 