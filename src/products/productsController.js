import Product from './product.js'
import { insertProduct } from './productQueries.js'
import validateProductValues from './validateProduct.js'

const updateProduct = (req, res) => {
    res.status(200).send({message: 'hello'})
}

const deleteProduct = (req, res) => {
    res.status(200).send({message: 'hello'})
}

const addProduct = async (req, res) => {
    const errors = validateProductValues(req.body)
    if (errors !== true) return res.status(200).send({errors: errors})

    const product = new Product(
        req.body.name,
        req.body.summary,
        req.body.priceBeforeTax,
        req.body.priceAfterTax,
        req.body.vat
    )

    const isSuccesful = await insertProduct(product)
    res.status(200).send({message: 'Product Added Successfully'})
}

const fetchProduct = (req, res) => {
    res.status(200).send({message: 'hello'})
}

export {
    updateProduct,
    deleteProduct,
    addProduct,
    fetchProduct,
}
