exports.fun = function(app){
    
    var student = require('../controllers/loginController.js')
    app.get('/login',student.getLogin);
    app.post('/register',student.getRegister);
}