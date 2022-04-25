const express = require('express')
const router =express.Router()
const {userPosting,userFechpost,userPostupdate,userPostdelete}=require('../controllers/posts')
const fetchpost=require('../middleware/fetchpost')
// get posts
router.get('/posts',fetchpost,userFechpost)
// post post
router.post('/posts',fetchpost,userPosting)
// put modify
router.put('/posts/:id',fetchpost,userPostupdate)
// delete item
router.delete('/posts/:id',fetchpost,userPostdelete)


module.exports=router