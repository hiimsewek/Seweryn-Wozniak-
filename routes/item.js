const express = require('express');
const router = express.Router();
const Men=require('../models/men');
var global = require("global");
var bodyParser = require('body-parser');
const { urlencoded } = require('express');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let sizes=[];

 
router.get('/', (req, res, next)=> 
{});
router.get('/:id', (req, res, next)=> {
  const itemNum=req.params.id;
  Men.find({itemNumber: itemNum},(err,data)=>
  {
    res.render('item', { title: 'Buty Meskie' , data});
  
  })
 });


 router.post('/:id/add',(req,res,next)=>{

    size.push(req.body.size);
    console.log(size);
    console.log(orderedItems)
    res.redirect(`/item/${req.params.id}/add`)
 })
 router.get('/:id/add', (req, res, next)=> 
{
  console.log(size)
  const itemNum=req.params.id;
  Men.findOne({itemNumber: itemNum},(err,data)=>
  {
    orderedItems.push(data.toObject());
  })
  
  res.redirect(`/item/${itemNum}`);
});

router.get("/:id/delete",(req,res,next)=>
{
  const itemNum=req.params.id;
  size.splice(size.findIndex(function(i){
    return i.itemNumber===itemNum;
  }),1)
  orderedItems.splice(orderedItems.findIndex(function(i){
    return i.itemNumber===itemNum;
  }),1);
 
  
  res.redirect("/shoppingCart");
})

module.exports = router;
