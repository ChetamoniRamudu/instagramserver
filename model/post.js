const mongoose=require('mongoose')
const {Schema}=mongoose
const postSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{type:String ,required:true},
    profession:{type:String,required:true},
    image:{type:String,required:true}

})
module.exports=mongoose.model("instapost",postSchema)