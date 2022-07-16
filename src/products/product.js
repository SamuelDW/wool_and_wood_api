class Product {
    name
    summary
    priceBeforeTax
    priceAfterTax
    vat
    status = 'active'

    constructor(name, summary, priceBeforeTax, priceAfterTax, vat) {
        this.name = name
        this.summary = summary
        this.priceBeforeTax = priceBeforeTax
        this.priceAfterTax = priceAfterTax
        this.vat = vat
    }
}

export default Product
