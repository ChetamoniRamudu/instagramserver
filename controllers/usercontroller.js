const User=require('../model/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const SECREATE="Instaclone"
// User Restration 
const userRegistration=async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(!user){
            const salt=await bcrypt.genSalt(10)
            const securepassword=await bcrypt.hash(req.body.password,salt)
            const newuserinfo={
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                password:securepassword
            }
            const newuser=await User.create(newuserinfo)
            let success=true
            return res.status(200).json({success,newuser})
        }else{
            return res.status(400).json({err:"User already exist please try another email"})
        }

    }catch(err){
        return res.status(500).json({
            err:"internal server error"
        })
    }

}
// User login 
const userLogin=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email})
        let success=false
        if(!user){
            return res.status(400).json({success,err:"try with correct credintials"})
        }
        const comparepassword=await bcrypt.compare(password,user.password)
        if(!comparepassword){
            return res.status(400).json({success,err:"wrong password"})
        }
        const data={
            user:{
                id:user.id
            }
        }
        const token=await jwt.sign(data,SECREATE)
        success=true
        return res.status(200).json({success,token,user})




    }catch(err){
        return res.status(500).json({err:"internal server at login"})
    }
}
module.exports={userRegistration,userLogin}