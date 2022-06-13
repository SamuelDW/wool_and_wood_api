const ProductClass = require('../models/product')

exports.productList = (req ,res) => {
    res.status(200).send({message: 'John'})
}

exports.createProduct = async (req, res) => {
    if (Object.entries(req.body).length === 0)  return res.status(400).send({message: 'No Data'})
    /* istanbul ignore next */
    try {
        const product = new ProductClass(req.body)
        await product.save()
    } catch (error) {
        if (error.name == 'ValidationError') {
            const errors = Object
                .keys(error.errors)
                .map((key) =>  error.errors[key].message)

            return res.status(400).send(errors)
        }
    }

    return res.status(200).send({message: 'Product Created'})
}
