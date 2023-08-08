const express = require('express')
const router = express.Router();
const ProductControler = require('../../controlers/ProductControlers/ProductControler.js')

router.get('/products',ProductControler.getProducts)

router.post('/createProduct',ProductControler.postProduct)
router.get(`/products/:id`,ProductControler.getOneProduct)
router.put(`/products/:id`,ProductControler.updateProduct)
router.delete(`/deleteProduct/:id`,ProductControler.deleteProduct)

module.exports = router