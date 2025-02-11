import express from 'express'
import  {handelCreateUserAccount , handelLoginAccount ,  handelDeleteAccount , handelGetAllAccounts}  from '../controllers/index'
const router = express.Router()

router.post('/createAccount' , handelCreateUserAccount)
router.post('/loginAccount' , handelLoginAccount)
router.delete('/deleteAccount' , handelDeleteAccount)
router.get('/getAllAccounts' , handelGetAllAccounts)

export default router