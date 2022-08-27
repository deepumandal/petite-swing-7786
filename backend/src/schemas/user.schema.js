const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    f_name:{type:String},
    l_name:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const User = mongoose.model('user',userSchema);

module.exports = User;