const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    email:String,
    name: String,
    sybject: String,
    message: [String],
})

module.exports=mongoose.model('Message',schema);