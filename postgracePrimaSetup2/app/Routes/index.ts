import express  from "express";
import {handelCreateAccount , handelUserLogin ,handelDeleteAccount} from "../controller/index"
import {validateCreateAccountReq , validateUserLoginReq} from "../util/index"
const router = express.Router()


router.post('/createAccount' ,validateCreateAccountReq , handelCreateAccount)
router.post('/userLogin' ,validateUserLoginReq , handelUserLogin)
router.delete('/deleteUser' ,validateUserLoginReq , handelDeleteAccount)

export default router