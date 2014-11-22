var express = require('express'),
    app = express()

// Variáveis globais para facilitar caminho das pastas
global.ROOT = __dirname
global.PATHS = require('./config/require_routes')(ROOT)

//
var config = require(PATHS('CONFIG')+'/config')
var routes = require(PATHS('CONFIG')+'/routes')(app)

//
var server = app.listen(config.port || 3000,function(){
    console.log('Servidor Iniciado')
}); 

