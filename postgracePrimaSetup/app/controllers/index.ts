import {createAccount , login , deleteAccount , getAllAccounts} from '../repository/index'
import { Request, Response } from 'express'

async function handelCreateUserAccount(req: Request, res: Response) {
    try {
        console.log('req came', req.body)
        const name: string = req?.body?.name;
        const email: string = req?.body?.email;
        const password: string = req?.body?.password;

        if (!email || !name || !password) {
            // res.status(400).send('pls send name and email')
            throw new Error ('pls send name, email and password')
        }

        const isAccountCreated = await createAccount(name, email, password)
        if(isAccountCreated == 0){
            throw new Error ('account with this email already exist')
        }
       
        res.status(201).json({msg:'account created successfully' , userDetails :isAccountCreated })

    } catch (error : any) {
        res.status(400).send({ error: error?.message })
    }
}


async function handelLoginAccount(req: Request, res: Response) {
    try {
        console.log('req came', req.body)

        const email: string = req?.body?.email;
        const password: string = req?.body?.password;

        if (!email || !password) {
            // res.status(400).send('pls send name and email')
            throw new Error ('pls send name and email ')
        }

        const isLoggedIn = await login(email, password)
        console.log(isLoggedIn)
        if(isLoggedIn == 0){
            throw new Error ('wrong email or password')
        }
       
        res.status(201).json({msg:'you are logged in ❤️' ,  userDetails : isLoggedIn})

    } catch (error : any) {
        res.status(400).send({ error: error?.message })
    }
}

async function handelDeleteAccount(req: Request, res: Response) {
    try {
        console.log('req came', req.body)

        const email: string = req?.body?.email;
        const password: string = req?.body?.password;

        if (!email || !password) {
            // res.status(400).send('pls send name and email')
            throw new Error ('pls send name and email ')
        }

        const isAccountDeleted = await deleteAccount(email, password)
        console.log(isAccountDeleted)
        if(isAccountDeleted == 0){
            throw new Error ('wrong email or password')
        }
       
        res.status(201).json({msg:'your account deleted successfully' ,  userDetails : isAccountDeleted})

    } catch (error : any) {
        res.status(400).send({ error: error?.message })
    }
}

async function handelGetAllAccounts(req: Request, res: Response) {
    try {
        console.log('req came', req.body)


        const isGotAllAccounts = await getAllAccounts()
        console.log(isGotAllAccounts)
        if(isGotAllAccounts == 0){
            throw new Error ('error in sending data')
        }
       
        res.status(201).json({msg:'Details of all users 💀💀💀' ,  userDetails : isGotAllAccounts})

    } catch (error : any) {
        res.status(400).send({ error: error?.message })
    }
}



export { handelCreateUserAccount ,  handelLoginAccount ,  handelDeleteAccount , handelGetAllAccounts}
