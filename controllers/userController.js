const path = require('path');

const {validationResult} = require("express-validator")
const session = require('express-session');
const { start } = require('repl');

const userController = {

    register: (req,res)=> {
        res.render('login')
    },
    processLogin: (req,res)=>{

        const resultValidation = validationResult(req)

      

        if (resultValidation.errors.length > 0) {
            return res.render('login', { errors: resultValidation.mapped(), oldData: req.body})
        }else{
            let user = {
                name: req.body.name,
                color: req.body.color,
                email: req.body.email,
                age: req.body.age
            }

            console.log(req.body.remind)

           
           
            req.session.name = req.body.name
            req.session.color = req.body.color

            if (req.body.remind != undefined) {
                res.cookie('favoriteColor', user.color)
            }
            
            
            return res.render('user',{user:user});
        }
   
    },
    show: (req,res)=>{        
        console.log("Agradecimiento")
        console.log(req.session.name)
        if (req.session.name) {
            return res.render('thankYou',{usuario: req.session})
        } else {
            return res.send('No se encuentra logueado')
        }
    }
    
}

module.exports = userController