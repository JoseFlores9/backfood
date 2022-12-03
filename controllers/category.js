const { response } = require('express')

const Category = require('../models/category')

const categoriesGet = async(req, res = response) => {
    const categories = await Category.find()
    res.json({
        msg: "get API - controlador",
        categories
    })
}

const categoriesPost = async(req, res = response) => {
    const body = req.body
    const category = new Category(body)
    category.save()

    res.json({
        msg: "post API - controlador",
    })
}

module.exports = {
    categoriesGet,
    categoriesPost
}