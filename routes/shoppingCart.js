const express = require('express');
const router = express.Router();
const global=require('global')


router.get('/', (req, res, next)=> 
{ 
    let isEmpty=true;
    let price=0;
    orderedItems.forEach(item=>
        {
            price+=item.price-item.discount;
            console.log(price)
            isEmpty=false;
        })
        
    res.render('shoppingCart', {orderedItems,price,isEmpty,size});
    
});
module.exports = router;

