import "dotenv/config"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function createAccount(userName: string, userEmail: string, userPassword: string) {

    try {
        return await prisma.user.create(
            {
                data: {
                    userName,
                    userEmail,
                    userPassword
                }
            }
        )
    }
    catch (err) {
        return 0
    }
}


async function getHashedPassword(userEmail: string) {

    return await prisma.user.findUnique(
        {
            where: {
                userEmail
            },
            select: {
                userPassword: true
            }
        }
    )

}




async function isUserExist(email: string) {
    return await prisma.user.findUnique({

        where: {
            userEmail: email
        }
    })
}

async function deleteAccount( userEmail: string) {

   
        return await prisma.user.update({
            where: {
             userEmail
            },
            data: {
              isDeleted : true
            }
        }
        )
}


export { createAccount, getHashedPassword ,isUserExist , deleteAccount}