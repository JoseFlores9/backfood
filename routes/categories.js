const { Router } = require('express');
const { categoriesGet, categoriesPost } = require('../controllers/category');

router = Router()

router.get('/', categoriesGet)
router.post('/', categoriesPost)


module.exports = router;