const { Router } = require('express')
const {buyoutGet, buyoutPost } = require('../controllers/buyout')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.get('/:id', [
    validateJWT
], buyoutGet)

router.post('/',[
    validateJWT
],buyoutPost)

module.exports = router