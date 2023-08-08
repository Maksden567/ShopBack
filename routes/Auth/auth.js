const express = require('express')
const router = express.Router();
const userControler=require('../../controlers/AuthControlers/AuthControler.js')
const authMiddleware  = require('../../middleware/authMiddleware.js')

router.post('/login',userControler.login)
router.post('/register',userControler.register)
router.get('/getUser',authMiddleware,userControler.getUser)

module.exports=router