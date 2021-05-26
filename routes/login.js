var express = require('express');
var router = express.Router();
const passport=require('passport');
const User=require('../models/user');

const initializePassport=require('../passport-config');

const users=[];
initializePassport(
    passport,
    email =>  users.find(user=>user.email===email),//szuka usera na podstawie emailu
    id => users.find(user=>user.id===id)
    )

    function checkAuthenticated(req,res,next)
    {
        if(req.isAuthenticated())
        {
            return next();
        }
        res.redirect('/login')
    }
    
    function checkNotAuthenticated(req,res,next)
    {
        if(req.isAuthenticated())
        {
            return res.redirect('/');
        }
        next();
    }

router.get("/",checkNotAuthenticated,(req,res)=>
{
    User.find({},(err,data)=>
    {
        data.forEach(item=>{
            users.push(item);
        })
        res.render('login')
    })
   
})
router.post("/",checkNotAuthenticated,passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true,
}))

module.exports = 
{
    users,
    router,
    checkNotAuthenticated,
    checkNotAuthenticated,
};