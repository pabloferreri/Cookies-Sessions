var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

// express-validator 
const { body } = require("express-validator");

const validations = [
    body("name").notEmpty().withMessage("Ingrese su nombre"),
    body("color").notEmpty().withMessage("Elija un color"),
    body("email")
        .notEmpty().withMessage("Ingrese un email valido").bail()
        .isEmail().withMessage('El formato del email ingresado no es valido'),
    body("age")
        .notEmpty().withMessage("Ingrese una edad").bail()
        .isInt({min:0, max: 150}).withMessage('Ingrese un caracter valido'),
]

/* GET users listing. */
router.get("/", userController.register)

router.post("/login",validations, userController.processRegister)

module.exports = router;
