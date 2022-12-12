const { response } = require("express");
const { addQuantity } = require("../lib/utils");
const Buyout = require('../models/buyout')
const Products = require('../models/product')


const buyoutGet = async(req, res = response) => {
    const id = req.params.id
    const user = req._id
    const query = {
        "_id": id
    }
    const buyout = await Buyout.findOne(query)

    if(buyout.user !== user) {
        return res.status(403).json();
    }

    let prods = buyout.products
    let prodIds =  prods.map((prod, index) => prod.id)
    const products = await Products.find({ _id : { $in : prodIds } })

    const resposeProds = addQuantity(products, prods)

    let response = {
        "id": buyout._id,
        "products": resposeProds,
        "total": buyout.total,
        "buy_date": buyout.buy_date
    }

    res.json({
        msg: 'compra',
        buyout: response
    })
}

const buyoutPost = async(req, res = response) => {
    const { products, total, buy_date } = req.body
    const user = req._id

    const buyout = new Buyout({ user, products, total, buy_date })
    await buyout.save()
    products.map(async (prod, index) => {
        await Products.findByIdAndUpdate(prod.id,
        {$inc: { "stock": -prod.quantity }}
    )
    })
    res.json({
        msg: 'comprado',
        id: buyout._id
    })
}

module.exports = {
    buyoutGet,
    buyoutPost
}