const { response } = require('express')
const jwt = require('jsonwebtoken')

const validateJWT = (req, res = response, next) => {
    const token = req.header('f-token')
    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion '
        })
    }

    try {
        const { _id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY)

        req._id = _id
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = {
    validateJWT
}