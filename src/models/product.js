const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required'],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, 'A price is required'],
    },
    description: {
        type: String,
        required: [true, 'A description is required'],
    },
    categories: {
        type: [String],
        required: [true, '3 categories are needed'],
        validate: {
            validator: v => Array.isArray(v) && v.length > 2,
            message: 'More than 3 categories must be added'
        },
    },
    tags: {
        type: [String],
        validate: {
            validator: v => Array.isArray(v) && v.length > 2,
            message: 'More than 3 tags must be added'
        },
        required: [true, '3 Tags are needed']
    },
    preparationTime: {
        type: String,
        required: [true, 'A preparation time is required'],
    },
})

module.exports = mongoose.model('Product', productSchema)
