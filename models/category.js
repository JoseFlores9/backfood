const { Schema, model } = require('mongoose')

const CategorySchema = Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    id: {
        type: String,
        required: [true, 'El id es requerido']
    },
    image: {
        type: String,
        required: [true, 'La imagen es requerida']
    }
})

module.exports = model( 'Category', CategorySchema )