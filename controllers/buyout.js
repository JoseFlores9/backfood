const { response } = require("express");


const buyoutGet = async(req, res = response) => {
    res.json({
        msg: 'compra'
    })
}

module.exports = {
    buyoutGet
}