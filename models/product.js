const { Schema, model } = require('mongoose')

const ProductSchema = Schema({
    title: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    category: {
        type: String,
        required: [true, 'La categoria es obligatoria']
    },
    price: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    formatprice: {
        type: String,
        required: [true, 'El precio formateado es obligatorio']
    },
    stock: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: [true, 'la imagen es obligatoria']
    }
})


module.exports = model( 'Product', ProductSchema )
