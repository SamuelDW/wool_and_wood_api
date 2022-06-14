const ProductClass = require('../models/product')

/**
 * Saves an object to the database, otherwise, returns an error
 * @param {Object} productData
 * @returns Array|ProductClass
 */
const saveProduct = async (productData) => {
    const product = new ProductClass(productData)
    const saved = await product.save()
    return saved
}


module.exports = {
    saveProduct
}
