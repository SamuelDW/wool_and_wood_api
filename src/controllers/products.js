exports.productList = (req ,res) => {
    res.status(200).send({message: 'John'})
}

exports.createProduct = (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'What ho!'})
}
