const mongoose=require('mongoose');

let BookSchma=mongoose.Schema({bname:String,price:Number});

mongoose.model('book',BookSchma);

module.exports=mongoose;


