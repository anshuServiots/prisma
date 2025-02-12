import "dotenv/config"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function createAccount(userName : string , userEmail : string , userPassword : string){

    try{
        return await prisma.user.create(
            {
               data: { 
                    userName ,
                    userEmail ,
                    userPassword
                }
            }
        )
    }
    catch(err){         
        return 0
    }   
}
async function userLogin( userEmail : string , userPassword : string){

    try{
        return await prisma.user.findUnique(
            {
               where: { 
                    userEmail ,
                    userPassword
                }
            }
        )
    }
    catch(err){         
        return 0
    }   
}

export {createAccount, userLogin}