import express from 'express'
import  {handelCreateUserAccount , handelLoginAccount ,  handelDeleteAccount , handelGetAllAccounts , handelChangeName}  from '../controllers/index'
const router = express.Router()

router.post('/createAccount' , handelCreateUserAccount)
router.post('/loginAccount' , handelLoginAccount)
router.delete('/deleteAccount' , handelDeleteAccount)
router.get('/getAllAccounts' , handelGetAllAccounts)
router.put('/changeName' , handelChangeName)

export default router