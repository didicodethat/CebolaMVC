// Dependências
var hbs = require('hbs'),
    lessMiddleware = require('less-middleware'),
    express = require('express'),
    path = require('path'),
    config = require(PATHS('CONFIG')+'/config');

/**
 * Executa configurações necessárias para o funcionamento das views
 * e outras partes do sistema
 * @param  {Object} app [bojeto retornado pela função express()]
 */
module.exports = function(app){
    
    app.set('views', PATHS('VIEWS'))

    // Determinando view engines e middlewares
    app.set('view engine', 'hbs')
    app.engine('hbs', hbs.__express);
    app.use('/css',lessMiddleware( PATHS('FRONT_END')+'/src_less', config.lessMiddleware ));
    
    // Determinando o public
    app.use( express.static( PATHS('PUBLIC') ) )

}