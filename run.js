var express = require('express'),
    app = express()

// Variáveis globais para facilitar caminho das pastas
global.ROOT = __dirname
global.PATHS = require('./config/require_routes')(ROOT)

//
var config = require(PATHS('CONFIG')+'/config')

//
var server = app.listen(3000,function(){
    console.log('Servidor Iniciado')
}); 

