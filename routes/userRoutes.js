const express=require("express");
const {registerUser, loginUser, currentUser}=require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router= express.Router();

// router.post("/register",(req,res)=>{
//     res.json({message:"Register"})
// });
router.post("/register",registerUser);


// router.post("/login",(req,res)=>{
//     res.json({message:"Login"})
// });
router.post("/login",loginUser);

// router.post("/current",(req,res)=>{
//     res.json({message:"Current"})
// });
router.get("/current",validateToken,currentUser);

module.exports=router;