const User = require('../models/user')

const emailExist = async( email = '' ) => {

    // Verificar si el correo existe
    const existEmail = await User.findOne({ email });
    if ( existEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

module.exports = {
    emailExist
}