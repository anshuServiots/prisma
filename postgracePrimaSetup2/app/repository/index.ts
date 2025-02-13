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


async function getHashedPassword(userId: string) {

    return await prisma.user.findUnique(
        {
            where: {
                userId ,
                isDeleted : false
            },
            select: {
                userPassword: true
            }
        }
    )

}




async function isUserExist(email: string) {
    return await prisma.user.findMany({

        where: {
            userEmail: email
        }
    })
}

async function deleteAccount( userId: string , ) {

           return await prisma.user.update({
            where: {
             userId
            },
            data: {
              isDeleted : true
            }
        }
        )
}


export { createAccount, getHashedPassword ,isUserExist , deleteAccount}