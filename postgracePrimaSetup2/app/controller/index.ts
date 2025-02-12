import { Request , Response } from "express";
import {checkValidation} from "../helper/index"
import {hashPassword} from  "../services/index"
import {createAccount , userLogin} from "../repository/index"
async function handelCreateAccount(req : Request , res : Response){

    try{ 
        checkValidation(req)

        const userName : string  = req?.body?.userName
        const userEmail : string  = req?.body?.userEmail
        const userPassword : string  = req?.body?.userPassword

        const hashedPassword = await hashPassword(userPassword)

        const dataSendAfterExicutingQuerry= await createAccount(userName, userEmail, hashedPassword)

        if(dataSendAfterExicutingQuerry == 0){
            throw { 
                "status": 400,
                message : 'account with this email already exist'
            }
        }
        res.status(200).json({res : dataSendAfterExicutingQuerry })

    }
    catch(error){
        res.status(400).json({ error: error})
    }
    
}


async function handelUserLogin(req : Request , res : Response){

    try{ 
        checkValidation(req)

        const userName : string  = req?.body?.userName
        const userEmail : string  = req?.body?.userEmail
        const userPassword : string  = req?.body?.userPassword

        const hashedPassword = await hashPassword(userPassword)

        const dataSendAfterExicutingQuerry= await createAccount(userName, userEmail, hashedPassword)

        if(dataSendAfterExicutingQuerry == 0){
            throw { 
                "status": 400,
                message : 'account with this email already exist'
            }
        }
        res.status(200).json({res : dataSendAfterExicutingQuerry })

    }
    catch(error){
        res.status(400).json({ error: error})
    }
    
}

export {handelCreateAccount}
