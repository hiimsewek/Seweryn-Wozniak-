var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    id:{type:String,default:Date.now},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})

module.exports=mongoose.model('User',userSchema);