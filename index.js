const express=require('express'); // server package
const app=express()
const mongoose=require('mongoose');
const cors=require('cors')
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000
mongoose.connect('mongodb+srv://instaclone:instaclone1307@cluster0.ysbxq.mongodb.net/INSTACLONE?retryWrites=true&w=majority').then(()=>console.log('mongodb connected'))
app.use(require('./routes/authuser'))
app.use(require('./routes/authpost'))
app.listen(PORT,()=>console.log('server connected'))