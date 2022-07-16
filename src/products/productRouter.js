import express from 'express'
import * as productController from './productsController.js'
const router = express.Router()

router.route('/')
    .post(productController.addProduct)
    .get(productController.fetchProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

export default router
