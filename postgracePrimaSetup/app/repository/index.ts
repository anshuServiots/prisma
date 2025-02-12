import "dotenv/config"

import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

interface obj{
    name : string,
    email : string ,
    password:string
}

// prisma.user.findMany()
// .then((data)=>{
//     console.log('data from server =====' ,data)
// })

async function createAccount ( name : string ,  email : string , password : string) {

    let userObj :  obj={
        name : name ,
        email : email,
        password : password
    }

    try{
        return await prisma.user.create(
            {
                data:userObj
            }
        )
    }
    catch(err){
       console.log(err)
       return 0
    }   
}
async function login (  email : string , password : string) {

    try{
        return await prisma.user.findUnique(
            {
                where:{
                    email : email,
                    password : password
                }
            }
        )
    }
    catch(err){
       console.log(err)
       return 0
    }   
}

async function deleteAccount (  email : string , password : string) {

    try{
        return await prisma.user.delete(
            {
                where:{
                    email : email,
                    password : password
                }
            }
        )
    }
    catch(err){
       console.log(err)
       return 0
    }   
}

async function getAllAccounts() {

    try{
        return await prisma.user.findMany({})
    }
    catch(err){
       console.log(err)
       return 0
    }   
}

async function changeName ( name : string ,  email : string , password : string) {

   
    try{
        return await prisma.user.update({
            where: {
              email: email,
              password : password
            },
            data: {
              name: name,
            },
        })
    }
    catch(err){
       console.log(err)
       return 0
    }   
}


export  {createAccount , login , deleteAccount , getAllAccounts, changeName }