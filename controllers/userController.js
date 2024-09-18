const asyncHandler=require("express-async-handler");
const User=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


// @desc Register for user
//@route Post /api/users/register
// @access public
const registerUser= asyncHandler(async (req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            res.status(400);
            throw new Error("All field are mandatory");
        }
        const userAvailable=await User.findOne({email});
        if(userAvailable){
            res.status(400).json({message:"User already register"});
            //throw new Error("User already register");
        }
        // hash password
        const hashedPassword=await bcrypt.hash(password,10);
        req.body.password=hashedPassword;
        const user=await User.create(req.body)

        res.status(200).json({message:"Register user",body:user})
    } catch (error) {
        
    }
   
});

// @desc Login Api
//@route Post /api/users/login
// @access public
const loginUser= asyncHandler(async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).json({message:"All field is mandatory"})
        }
        console.log(process.env.ACCESS_TOKEN_SECERT)

        const user= await User.findOne({email});
        if(user  && (await bcrypt.compare(password,user.password))){
            const accessToken=jwt.sign({
               user:{
                username:user.username,
                email:user.email,
                id:user.id,
               } 
        //},process.env.ACCESS_TOKEN_SECERT);
        },"mahfuz@123",
        {expiresIn:"1m"}
    );
            res.status(200).json({message:"Log user",access:accessToken})
        }else{
            res.status(401).json({message:"User or password are not valid"})
        }
        
    } catch (error) {
        
    }
   
});

// @desc Current user information Api
//@route Post /api/users/current
// @access private
const currentUser= asyncHandler(async (req,res)=>{
    try {
        res.status(200).json({message:"crret user"})
    } catch (error) {
        
    }
   
});

module.exports={registerUser,loginUser,currentUser};