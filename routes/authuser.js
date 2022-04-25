const express = require('express')
const router =express.Router()
const {userRegistration,userLogin}=require('../controllers/usercontroller')
// registration
router.post('/signup',userRegistration);
// login

router.post('/signin',userLogin)

module.exports=router