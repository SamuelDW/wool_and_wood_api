const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

/**
 * Creating the application
 */
const app = express()

/**
 * For security purposes, the following will be enabled and configured
 */
app.disable('x-powered-by')
app.use(helmet())
app.use(cors())

app.use(morgan("dev"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/**
 * Routing for the API
 * Main routes will be Products, Orders, Order Items Users and Payments
 */
const productsRouter = require('./src/routes/products')

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.status(200).send({message: 'hello'})
})


module.exports = app
