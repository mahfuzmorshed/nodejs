const express=require("express");
const router= express.Router();
const {getContact,createContact,putContact,deleteContact}=require("../controllers/contactController");
const validateToken=require("../middleware/validateTokenHandler");

router.use(validateToken);

// router.route("/").get((req,res)=>{
//     res.status(202).json({message:"Get all cots"})
// });
// Secend way 
router.route("/").get(getContact);
//router.route("/").get(getContact).post(createContact);

// router.route("/").post((req,res)=>{
//     res.status(200).json(req.body)
// });
// Secend way
router.route("/").post(createContact);

// router.route("/:id").put((req,res)=>{
//     res.status(202).json({message:`Update all cots ${req.params.id}`})
// });
// Secend way 
router.route("/:id").put(putContact);

// router.route("/:id").delete((req,res)=>{
//     res.status(202).json({message:`Delete all cots ${req.params.id}`})
// });
// Secend way 
router.route("/:id").delete(deleteContact);


module.exports=router;
// Secend way 
//