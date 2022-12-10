const { Router } = require('express')
const {buyoutGet} = require('../controllers/buyout')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.get('/', [
    validateJWT
], buyoutGet)

module.exports = router