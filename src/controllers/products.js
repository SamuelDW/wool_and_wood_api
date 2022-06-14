const productRepository = require('../repository/productRepository')

exports.productList = (req ,res) => {
    res.status(200).send({message: 'John'})
}

exports.createProduct = async (req, res) => {
    if (Object.entries(req.body).length === 0)  return res.status(400).send({message: 'No Data'})

    const data = await productRepository.saveProduct(req.body)
        .catch(error => {
            if (error.name == 'ValidationError') {
                const errors = Object
                    .keys(error.errors)
                    .map((key) =>  error.errors[key].message)

                return errors
            }
        })

    return Array.isArray(data)
        ? res.status(400).send(data)
        : res.status(200).send({message: 'Product Created'})
}
