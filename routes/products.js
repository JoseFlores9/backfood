const { Router } = require('express');
const { productsGet } = require('../controllers/products');

router = Router()

router.get('/', productsGet)

module.exports = router;