const mongoose = require('mongoose')

const dbConnection = async() => {
    try{
        await mongoose.connect( process.env.MONGODB_CNN)

        console.log('Base de datos conectada')
    } catch (error){
        throw new Error('Error al iniciar db')
    }
}

module.exports = {
    dbConnection
}