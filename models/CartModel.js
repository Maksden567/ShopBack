const {Schema} = require('mongoose')


const CartSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    size:{
        type:Number,
        require:true
    },
    countOfItem:{
        type:Number,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    sale:{
        type:Number
    },
    user: {type:Schema.Types.ObjectId, ref: 'User'},
    
})

module.exports = CartSchema