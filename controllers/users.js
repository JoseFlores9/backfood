const bcryptjs = require('bcryptjs')
const { response, request } = require('express')
const User = require('../models/user')

const usersGet = (req = request, res = response) => {
    const {q, name = 'No name', apikey, page = 1, limit } = req.query

    res.json({
        msg: '200 request'
    })
}

const usersPost = async(req, res = response) => {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync( password, salt)
    await user.save()
    res.json({
        user
    })
}

module.exports = {
    usersGet,
    usersPost
}