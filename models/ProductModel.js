const { Schema } = require('mongoose')

const ProductSchema = new Schema ({
    title:{
        type:String,
        require:true
    },
    descr:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    size:{
        type:[],
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    sale:{
        type:Number,
        default:1
    },
    counterOfOrder:{
        type:Number,
        default:1
    },
    views:{
        type:Number,
        default:0
    }
    

})


module.exports=ProductSchema