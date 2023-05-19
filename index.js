import express  from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import morgan from 'morgan'
dotenv.config()

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

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/**
 * Routing for the API
 * Main routes will be Products, Orders, Order Items Users and Payments
 */
import productRouter from './src/products/productRouter.js'

app.use('/products', productRouter)



// import connection from './src/config/database.js'

// app.get('/', (req, res) => {
//     connection.query('SELECT * from products', (err, rows) => {
//         if (err) throw err
//         res.status(200).send({data: rows})
//     })
// })

export default app
