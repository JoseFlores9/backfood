const { response } = require('express')

const productsGet = (req, res = response) => {
    res.json({
        msg: "get API - controlador"
    })
}

module.exports = {
    productsGet
}