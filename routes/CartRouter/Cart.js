const express = require('express')
const router = express.Router();
const CartControler = require('../../controlers/CartControlers/CartControler.js')
const authMiddleware= require('../../middleware/authMiddleware.js')

router.get('/',authMiddleware,CartControler.getCartItems)
router.post('/',authMiddleware,CartControler.createCartItem)
router.put('/:id',authMiddleware,CartControler.updateCounter)
router.delete('/:id',authMiddleware,CartControler.deleteCartItem)

module.exports = router