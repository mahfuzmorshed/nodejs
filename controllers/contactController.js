const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
const e = require("express");
// @desc Get all contact
//@route Get /api/contact
// @access private
const getContact= asyncHandler(async (req,res)=>{
    try {
        const cotacts=await Contact.find({user_id:req.user.id});
        res.status(200).json(cotacts)
    } catch (error) {
        
    }
   
});

// @desc Create all contact
//@route Post /api/contact
// @access private
const createContact= asyncHandler(async (req,res)=>{
    const{name,email,phone}=req.body;
    const contact=await Contact.create({
        name,
        email,
        phone
    });
    
    res.status(201).json(contact);
    return;
    console.log(req.body)
    //const {id,ae,name}=req.body;

    var result = req.body;
// ordering
result.sort(function (a, b) {
    return (a.id < b.id) ? -1 : 1;
  });
//   [{"id":14,"ae":"dddd","name":"Mahfuz"},{"id":1,"ae":"eee","name":"Manha"},{"id":10,"ae":"aaa","name":"Muskan"}
//     ,{"id":2,"ae":"www","name":"Rimo"}
//     ]
// result = Object.keys(result).map(function (key) {
//   return { key: key, value: result[key] };
// });

    res.status(201).json(result)
}); 
// @desc Get all contact
//@route Get /api/contact
// @access public
const putContact= asyncHandler(async (req,res)=>{
    res.status(202).json({message:`Update all cots ${req.params.id}`})
});
// @desc Get all contact
//@route Get /api/contact
// @access public
const deleteContact= asyncHandler(async (req,res)=>{
    res.status(202).json({message:`Delete all cots ${req.params.id}`})
}); 

module.exports={getContact,createContact,putContact,deleteContact};