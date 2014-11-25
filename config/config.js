module.exports = {
    port : 3000,
    // ver configurações na documentação de less-middleware
    lessMiddleware : {
        dest : PATHS('PUBLIC')+'/css',
        once : true,
    }
}