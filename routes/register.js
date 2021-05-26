var express = require('express');
var router = express.Router();
var login=require('./login');
const bcrypt=require('bcrypt');
const flash=require('express-flash');
const session=require('express-session');
const methodOverride = require('method-override')
const passport=require('passport');
const User=require('../models/user');


router.get("/",login.checkNotAuthenticated,(req,res)=>
{
    res.render('register.pug',);
})
router.post("/",login.checkNotAuthenticated,async (req,res)=>
{
    try{
        let error;
        const hashedPassword=await bcrypt.hash(req.body.password, 10);
           const userData=new User(
        {
            username:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        })
       
        
        userData.save((err)=>
        {
            console.log(err);
        });
    
        

        // users.push({
        //     id:Date.now().toString(),
        //     name:req.body.name,
        //     email:req.body.email,
        //     password:hashedPassword,
        // })
     
        res.render('register.pug')
        
    }
    catch{
        res.redirect('/register');
    }
})

module.exports = router;