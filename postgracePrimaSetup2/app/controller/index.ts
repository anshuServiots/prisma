import { Request , Response } from "express";
import {checkValidation} from "../helper/index"
import {hashPassword , unHashPassword} from  "../services/index"
import {createAccount , getHashedPassword, isUserExist , deleteAccount} from "../repository/index"
import { defaultRes } from "../util";
async function handelCreateAccount(req : Request , res : Response){

    try{ 
        checkValidation(req)
        const userName : string  = req?.body?.userName
        const userEmail : string  = req?.body?.userEmail
        const userPassword : string  = req?.body?.userPassword

        const hashedPassword = await hashPassword(userPassword)

        const dataSendAfterExicutingQuerry = await createAccount(userName, userEmail, hashedPassword)

        if(dataSendAfterExicutingQuerry == 0){
            throw { 
                "status": 400,
                message : 'account with this email already exist'
            }
        }

        const dataToSend = {
            userId :  dataSendAfterExicutingQuerry.userId,
            userName :  dataSendAfterExicutingQuerry.userName,
        }
        
        defaultRes( res , 201 , 'account created successfully ✌️✌️✌️✌️' , null ,  dataToSend )
       // res.status(200).json({res : dataToSend })

    }
    catch(error){
        defaultRes( res , 400 , 'err in creating account' ,   error , null )
    }
    
}


async function handelUserLogin(req : Request , res : Response){

    try{ 
        checkValidation(req)

        const userEmail : string  = req?.body?.userEmail
        const userPassword : string  = req?.body?.userPassword

        const isUserExistRes = await isUserExist(userEmail)


        if (!isUserExistRes){
            throw { 
                "status": 400,
                message : 'account with this email dosent exist'
            }
        }

        const isPasswordCorrect = await unHashPassword(userPassword , isUserExistRes?.userPassword)

        if(isPasswordCorrect){
           
            const resToSend = {
                userId: isUserExistRes?.userId,
                userName : isUserExistRes?.userName
            }

            defaultRes( res , 200 , 'you are logged in 🦤🦤🦤🦤🦤🦤' ,   null , resToSend )
        }
      
    }
    catch(error){
        defaultRes( res , 400 , 'err in logging in account' ,   error , null )
    }   
}
async function handelDeleteAccount(req : Request , res : Response){

    try{ 
        checkValidation(req)

        const userEmail : string  = req?.body?.userEmail
        const userPassword : string  = req?.body?.userPassword

        const isUserExistRes = await isUserExist(userEmail)


        if (!isUserExistRes){
            throw { 
                "status": 400,
                message : 'account with this email dosent exist'
            }
        }

        const isPasswordCorrect = await unHashPassword(userPassword , isUserExistRes?.userPassword)

        if(isPasswordCorrect){

            await deleteAccount(userEmail)
           
            defaultRes( res , 200 , 'account deleted successfully' ,   null , null )
        }
      
    }
    catch(error){
        defaultRes( res , 400 , 'err in deleting in account' ,   error , null )
    }   
}

export {handelCreateAccount , handelUserLogin , handelDeleteAccount}
