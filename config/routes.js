var AppController = require(PATHS('CONTROLLERS')+'/App');

module.exports = function(app){

    // AppController Controllers/App.js
    
    app.get('/',AppController.main)
    
}