const { response } = require("express");
const Buyout = require("../models/buyout");

const buyoutAll = async(req, res = response) => {
    const user = req._id
    const query = {
        "user": user
    }
    const buyout = await Buyout.find(query).sort( { buy_date : -1} )
    res.json({
        msg: 'all',
        buys:  buyout
    })
}

module.exports = {
    buyoutAll
}