const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");


const validateToken=asyncHandler(async (req,res,next)=>{
    let token;
    let authHeader=req.header.Authorization|| req.header.authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        //jwt.verify(token,process.env.ACCESS_TOKEN_SECERT)
        jwt.verify(token,"mahfuz@123",(err,decoded)=>{
            if(err){
                res.status(401).json({mes:"User is not authorized"});
                return;
            }
                req.user=decoded.user;
                next();
        });
        if(!token){
            res.status(401).json({mes:"ser token is"});
        }
    }
}); 
module.exports=validateToken;