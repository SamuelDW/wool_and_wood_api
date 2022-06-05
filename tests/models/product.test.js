const Product = require('../../src/models/product')

describe('Create a Product', () => {
    test('It should be valid if name is passed', () => {
        const testProduct = new Product({name: 'test'})
        expect(testProduct.name).toBe('test')
    })
})
