const { Router } = require('express')
const { buyoutAll } = require('../controllers/buys')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.get('/', [
    validateJWT
], buyoutAll)



module.exports = router