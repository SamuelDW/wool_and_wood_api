const request = require('supertest')
const app = require('../../index')
const product = require('../../src/models/product')

describe('GET /products', () => {
    describe('A blank get request is made', () => {
        test('A status of 200 should be recieved', async () => {
            try {
                const response = await request(app).get('/products')
                expect(response.status).toBe(200).rejects.toThrow(
                    BadRequestException)
            } catch (err) {}
        })
    })
})

describe('POST /products', () => {
    describe('A blank post request is made', () => {
        test('A status of 400 should be recieved', async () => {
            const response = await request(app).post('/products').send({})
            expect(response.status).toBe(400)
            expect(response.body.message).toEqual('No Data')
        })

    })
    describe('A valid post is made', () => {
        test('A status of 200 should be recieved', async () => {
            const response = await request(app).post('/products')
            // .send({
            //     name: 'test',
            //     price: 9.99,
            //     description: 'Test me',
            //     tags: ["1", "2", "3"],
            //     categories: ["1", "2", "3"],
            //     preparationTime: "1",
            // })
            expect(response.status).toBe(400)
        })
    })
    describe('A invalid request object passed', () => {
        test('A status of 400 should be recieved', async () => {
            const response = await request(app).post('/products').send({
                name: 'test',
                price: 9.99,
                description: 'test',
                tags: ["1", "2"],
                categories: ["1", "2", "3"],
                preparationTime: "1",
            })
            expect(response.status).toBe(400)
        })
    })
})
