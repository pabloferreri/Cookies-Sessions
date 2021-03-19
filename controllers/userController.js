const path = require('path');

const {validationResult} = require("express-validator")

const userController = {

    register: (req,res)=> {
        res.render('register')
    },
    processRegister: (req,res)=>{

        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('register', { errors: resultValidation.mapped(), oldData: req.body})
        }else{
            let user = {
                name: req.body.name,
                color: req.body.color,
                email: req.body.email,
                age: req.body.age
            }
    
            return res.render('usuario',{user:user});
        }

        
    }
    
}

module.exports = userController