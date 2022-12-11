const { response } = require("express");
const Buyout = require("../models/buyout");

const buyoutAll = async(req, res = response) => {
    const user = req._id
    const query = {
        "user": user
    }
    const buyout = await Buyout.find(query)
    res.json({
        msg: 'all',
        buys:  buyout
    })
}

module.exports = {
    buyoutAll
}