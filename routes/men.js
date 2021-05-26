const express = require('express');
const router = express.Router();
const Men=require('../models/men');

const itemsPerPage=3;

router.get('/', (req, res, next)=> {

 Men.find({},(err,data)=>
 {
    // const newsData=new Men(
    //     {
    //         itemNumber:1,
    //         title:"Vans sneakers",
    //         description:"Czarne trampki vans",
    //         price:210,
    //         discount:10,
    //         pictures:
    //         {
    //            picture1:"https://50style.pl/media/cache/gallery/rc/wkbhgacj/vans-yt-ward-mlodziezowe-buty-lifestyle-czarny-vn0a38j9pvj1.jpg" ,
    //            picture2:" ",
    //            picture3:" ",
    //         },
    //         sizes:
    //         {
    //           size35:99,
    //           size36:99,
    //           size37:0,
    //           size38:99,
    //           size39:99,
    //           size40:1,
    //           size41:0,
    //           size42:30,
    //           size43:99,
    //           size44:99,
    //           size45:99,
    //           size46:99,
    //         }
    //     })
    //     newsData.save((err)=>
    //     {
    //         console.log(err);
    //     });
    
    res.render('men', { title: 'Buty Meskie' , data});
 }).limit(3);
});
router.get('/:id', (req, res, next)=> {
  console.log(req.params.id)
  const pageNumber=req.params.id;

  Men.find({itemNumber: {$gt:(pageNumber-1)*itemsPerPage,$lte:(pageNumber)*itemsPerPage}},(err,data)=>
  {
    res.render('men', { title: 'Buty Meskie' , data});
  }).limit(itemsPerPage);
 });
 
module.exports = router;
