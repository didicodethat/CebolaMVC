var vows = require('vows'),
    assert = require('assert'),
    path = require('path')


var root_path = path.normalize(__dirname+'/../')

// Testes

vows.describe('Require Routes').addBatch({
    'Quando propriedade for ' : {
        
        topic : function(){return require('../config/require_routes')(root_path)},
        
        'vazia ou nula' : {
            
            topic : function(require_routes){
                return require_routes()
            },

            'Deve retornar o root' : function(topic){
                assert.deepEqual(topic,root_path)
            }

        },

        'valor definido' : {
            
            topic : function(require_routes){;
                return require_routes('CONFIG')
            },
            
            'Deve valor diferente da ROOT' : function(route){
                assert.notDeepEqual(route,root_path)
            },

            'deve ser uma string' : function(route){
                assert.isString(route)
            }

        },

        'Valor não definido' : {
            
            topic : function(require_routes){
                return require_routes('asd')
            },
            
            'Deve ser falsa' : function(route){
                assert.isFalse(route)
            }
        }
    }
}).run();