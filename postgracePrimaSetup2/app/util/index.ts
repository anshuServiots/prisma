//import {validationResult , body} from "express-validator"
const {body} = require("express-validator")
const validateCreateAccountReq  = [
    body('userName').notEmpty().withMessage('pls send user name') ,
    body('userName').isLength({min : 5 , max : 30}).trim().withMessage('userName size should be between 5 and 30') ,
    
    body('userEmail').notEmpty().withMessage('pls send user email') ,
    body('userEmail').isEmail().trim().withMessage('pls send valid email') ,
    
    body('userPassword').notEmpty().withMessage('pls send user password') ,
    body('userPassword').isLength({min : 5 , max : 30}).trim().withMessage('userName size should be between 5 and 30') ,
    
]

export default validateCreateAccountReq