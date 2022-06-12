const request = require('supertest')
const app = require('../../index')

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
        test('A status of 200 should be recieved', async () => {
            try {
                const response = await request(app).post('/products')
                expect(response.status).toBe(200).rejects.toThrow(
                    BadRequestException)
            } catch (err) {}
        })
    })
})
