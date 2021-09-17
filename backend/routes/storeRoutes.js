const express = require('express');
const router = express.Router();
const Storeuser = require('../Models/Shops')



router.get('/Signup',async(req,res) =>{
    const {username,email,password} = req.body
        Shopeuser.findOne({email:email},(err,user)=>{
            if(user){
                 res.send({message: "registerd"})
            }else{
                const user = new storeuser({
                    name,
                    email,
                    password
                })
                user.save(err =>{
                    if(err){
                        res.send(err)
                    }else{
                        res.send({message: "registerd succussfully"})
        
                    }
                })
            }
        })
    })

module.exports = router;