
const ProductSchema = require('../../models/ProductModel.js')
const mongoose = require('mongoose')

class ProductControler {

    async getProducts(req, res) {
        const pageOptions = {
            page: parseInt(req.query.page, 10) || 0,
            limit: parseInt(req.query.limit, 10) || 10
        }        
        try {
            const Product = mongoose.model('Product', ProductSchema)
            const products = await Product.find().skip(pageOptions.limit*pageOptions.page).limit(pageOptions.limit).exec()
            return res.json(products)
        } catch (error) {
            return res.json(error)
        }
    }

    async getOneProduct(req, res) {
        try {
            const { id } = req.params
            const Product = mongoose.model('Product', ProductSchema)
            const product = await Product.findByIdAndUpdate(id,{$inc:{views:1}},{returnDocument:'after'})
            return res.json(product)
        } catch (error) {
            return res.json(error)
        }
    }

    async postProduct(req, res) {
        try {
            const { title, descr, price, imageUrl, size, sale } = req.body
            const Product = mongoose.model('Product', ProductSchema)
            const product = new Product({
                title,
                descr,
                price,
                imageUrl,
                size,
                sale

            })

            await product.save()
            return res.json(product)
        } catch (error) {
            return res.json(error)
        }

    }

    async updateProduct(req, res) {
        try {

            const { title, descr, price, imageUrl, size, sale } = req.body
            const { id } = req.params
            const Product = mongoose.model('Product', ProductSchema)
            const product = await Product.findByIdAndUpdate(id, {
                title,
                descr,
                price,
                imageUrl,
                size,
                sale

            }, { returnDocument: 'after' })

            await product.save()
            return res.json(product)


        } catch (error) {
            console.log(error)
        }
    }

    async deleteProduct(req,res){

        const {id}=req.params
        const Product = mongoose.model('Product', ProductSchema)
        await Product.findByIdAndDelete(id)
        return res.json('Продукт видалений успішно')
    }

}

module.exports = new ProductControler