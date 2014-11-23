// Dependências
var path = require('path')
/**
 * Função para facilitar a inclusão de arquivos em relação ao root
 * isto ajuda na inclusão de arquivos
 * @param  {String} root [valor __dirname do app.js]
 * @return {Function}      
 */
module.exports = function(root){
    /**
     * Retorna o local determinado pelo dir
     * @param  {String} dir [Nome relativo da pasta a ser incluida]
     * @return {String}     [Nome da pasta relativa ao root ou falso se o dir não existir]
     */
    return function(dir){

        // Se nulo retorne root
        if(!dir) return path.normalize(root);
        
        // Pastas Principais
        var routes = {

            // Config
            CONFIG : '/config',
            
            // App
            APP : '/app',
            VIEWS : '/app/Views',
            MODELS : '/app/Models',
            CONTROLLERS : '/app/Controllers',

            // Outros
            LIB : '/lib/',
            PUBLIC : '/public',
            FRONT_END : '/front_end'
        }

        return routes[dir]? root+routes[dir] : false;
    };
} 