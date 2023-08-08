const {Schema} = require('mongoose')

const UserSchema = new Schema({
    fullname:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String,
        
    },
    role:{
        type:String,
        default:'user'
    }
})

module.exports=UserSchema