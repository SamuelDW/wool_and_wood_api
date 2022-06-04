const express = require('express')
const router = express.Router()

const productController = require('../controllers/products')

router.route('/')
    .get(productController.productList)
    .post(productController.createProduct)

module.exports = router
