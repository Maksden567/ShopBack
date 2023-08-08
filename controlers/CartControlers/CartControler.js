const mongoose = require('mongoose')
const CartSchema = require('../../models/CartModel.js')




class CartControler {

    async getCartItems(req,res){

        const CartModel = mongoose.model('CartItem',CartSchema)
        const items = await CartModel.find({user:req.user.id})
        res.json(items)

    }
    async createCartItem(req,res){
        const {counter,title,size,sale,price,imageUrl} = req.body
        const CartModel = mongoose.model('CartItem',CartSchema)
        const cartItem = await new CartModel({
            countOfItem:counter,
            title,
            size,
            sale,
            price,
            imageUrl,
            user:req.user.id
        })
        await cartItem.save()
        return res.json({cartItem})

        
    }

    async updateCounter (req,res){
        const {counter,title,size,sale,price,imageUrl} = req.body
        const {id}= req.params
        const CartModel = mongoose.model('CartItem',CartSchema)
        const cartItem = await CartModel.findByIdAndUpdate(id,{
            countOfItem:counter,
            title,
            size,
            sale,
            price,
            imageUrl,
            user:req.user.id
        },{ returnDocument: 'after' })
        await cartItem.save()
        return res.json(cartItem)
    }

    async deleteCartItem(req,res){
        const {id}= req.params
        const CartModel = mongoose.model('CartItem',CartSchema)
        await CartModel.findByIdAndDelete(id)
        return res.json("Все успішно видалено")
    }




}

module.exports = new CartControler