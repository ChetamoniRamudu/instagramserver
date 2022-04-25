const Post=require('../model/post')

const userPosting=async(req,res)=>{
    try{
    const posts=await Post.create({
        title:req.body.title,
        profession:req.body.profession,
        image:req.body.image,
        user:req.user
    })
    console.log(posts)
    return res.status(200).json({status:"successfully posting post",posts})
}catch(err){
    return res.status(500).json({err:"internal post posting  server error",err})
}

}
const userFechpost=async(req,res)=>{
    try{
        const posts=await Post.find()
        return res.status(200).json({status:"successfully fetching posts",posts})

    }catch(err){
        return res.status(500).json({err:"internal fetch post server error"})
    }
}
const userPostupdate=async(req,res)=>{
    try{
        const posts=await Post.updateOne({_id:req.params.id,user:req.user},{profession:req.body.profession})
        console.log(posts)
         if(posts.modifiedCount>0){
         return res.status(200).json({success:"successfully updated",posts})
        }else{
            return res.status(401).json({success:"fail",message:"unathorization for update this post "})
         }

    }catch(err){
        return res.status(500).json({err:"internal  update sever error"})
    }
}
const userPostdelete=async(req,res)=>{
    try{
        const posts=await Post.deleteOne({_id:req.params.id,user:req.user})
        console.log(posts)
         if(posts.deletedCount>0){

         return res.status(200).json({success:"successfully deleted",posts})
         }else{
         return res.status(401).json({success:"fail",message:"unathorization for delete this post"})
         }

    }catch(err){
        return res.status(500).json({err:"internal  update sever error"})
    }
}
module.exports={userPosting,userFechpost,userPostupdate,userPostdelete}