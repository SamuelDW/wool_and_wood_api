class Product {
    /**
     * The name of the product
     * @type {String}
     */
    name

    /**
     * A description of the product
     * @type {Text}
     */
    summary

    /**
     * Price before tax for breakdown of prices
     * @type {*}
     */
    priceBeforeTax

    /**
     * Price after tax for breakdown of prices
     * @type {*}
     */
    priceAfterTax

    /**
     * The VAT amount
     */
    vat

    /**
     * Whether the product is active for being sold
     */
    status = true

    constructor(name, summary, priceBeforeTax, priceAfterTax, vat) {
        this.name = name
        this.summary = summary
        this.priceBeforeTax = priceBeforeTax
        this.priceAfterTax = priceAfterTax
        this.vat = vat
    }

    updateName(updatedValue) {
        this.name = updatedValue
    }
}

export default Product
