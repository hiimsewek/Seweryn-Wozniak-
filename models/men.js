var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var menSchema=new Schema({
    itemNumber:{type:Number,required:true},
    title:{type: String,required:true},
    description:{type: String,required:true},
    price:{type:Number,required:true},
    discount:Number,
    date:{type:Date,default:Date.now},
  
    pictures: 
    {
        picture1:String,
        picture2:String,
        picture3:String,
    },
    sizes:
    {
        size35:Number,
        size36:Number,
        size37:Number,
        size38:Number,
        size39:Number,
        size40:Number,
        size41:Number,
        size42:Number,
        size43:Number,
        size44:Number,
        size45:Number,
        size46:Number,
        
    }
})

module.exports=mongoose.model('Men',menSchema);