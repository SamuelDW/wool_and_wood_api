import connection from '../config/database.js'
import mysql from 'mysql2/promise'
import { errorCode } from './productErrors.js'

/**
 * Inserts a singular product into the products database
 * @param {Product} product
 */
const insertProduct = async (product) => {
    const insertQuery = 'INSERT INTO ?? (??,??, ??, ??, ??, ??) VALUES (?,?,?,?,?,?)'
    const query = mysql.format(insertQuery, [
        'products',
        'name',
        'summary',
        'priceBeforeTax',
        'priceAfterTax',
        'vat',
        'status',
        product.name,
        product.summary,
        product.priceBeforeTax,
        product.priceAfterTax,
        product.vat,
        product.status,
    ])

    try {
        const results = await connection.query(query)
        return {message: 'Product Added Succesfully'}
    } catch (err) {
        const error = errorCode(err.errno)
    }

}

export {
    insertProduct,
}
