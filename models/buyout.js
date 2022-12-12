const { Schema, model } = require('mongoose')

const BuyoutSchema = Schema({
    user: {
        type: String,
        required: [true, 'el id de usuario es requerido']
    },
    products: {
        type: Array,
        required: [true, 'los ids de productos son necesarios']
    },
    total: {
        type: Number,
        required: [true, 'El total es requerido']
    },
    buy_date: {
        type: Date,
        required: [true, 'La fecha de compra es requerida']
    }
})

module.exports = model('Buyout', BuyoutSchema)