const { Router } = require('express');
const { productsGet, productsPost } = require('../controllers/products');

router = Router()

router.get('/', productsGet)
router.post('/', productsPost)


module.exports = router;