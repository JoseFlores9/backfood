const bcryptjs = require('bcryptjs')
const { response } = require('express')
const { generateJWT } = require('../helpers/generate-jwt')
const User = require('../models/user')

const login = async(req, res= response) => {
    const { email, password } = req.body

    const user = await User.findOne( {email} )

    if ( !user ) {
        return res.status(400).json({
            msg: 'usuario o contraseña invalidos'
        })
    }

    if ( !user.state ) {
        return res.status(400).json({
            msg: 'usuario status false'
        })
    }

    const validPassword = bcryptjs.compareSync( password, user.password )

    const token = await generateJWT(user._id)

    if( !validPassword ) {
        return res.status(400).json({
            msg: 'usuario o contraseña incorrectos'
        })
    }

    try {
        res.json({
            msg: 'Login ok',
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hablar con el admin'
        })
    }
}

module.exports = {
    login
}