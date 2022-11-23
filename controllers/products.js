const { response } = require('express')

const Product = require('../models/product')

const productsGet = async(req, res = response) => {
    const products = await Product.find()
    res.json({
        msg: "get API - controlador",
        products
    })
}

const productsPost = async(req, res = response) => {
    const body = req.body
    const product = new Product(body)
    product.save()

    res.json({
        msg: "post API - controlador",
    })
}

module.exports = {
    productsGet,
    productsPost
}