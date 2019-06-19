const Login = require('../models/userDetails');

exports.getLogin = function (req, res) {

    Login.find(function(err,result){
        if(err) throw err;
        console.log("data featched successfully:");
        res.send(result);
    })
}

exports.getRegister = function(req, res){
    var data = req.body;
console.log("data ***********",data);
    var loginData = {
        "username":data.userName,
        "pass":data.pass,
        };
  
        var loginObj = new Login(loginData);
        loginObj.save( function(err){
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(loginObj);
            
        }
    });

}