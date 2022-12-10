const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost } = require('../controllers/users');
const { emailExist } = require('../helpers/db-validator');
const { validateFields } = require('../middlewares/validate')

const router = Router()

router.get('/', usersGet)

router.post('/',[
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe ser de más de 6 letras').isLength({ min:6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( emailExist ),
    validateFields
], usersPost)

module.exports = router