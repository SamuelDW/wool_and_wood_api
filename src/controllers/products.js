exports.productList = (req ,res) => {
    console.log(req.query)
    res.status(200).send({message: 'John'})
}

exports.createProduct = (req, res) => {
    res.status(200).send({message: 'What ho!'})
}

exports.deleteProduct = (req, res) => {
    res.status(200).send()
}