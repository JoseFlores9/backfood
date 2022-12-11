const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.productsPath = '/api/products'
        this.categoriesPath = '/api/categories'
        this.authPath = '/api/auth'
        this.usersPath = '/api/users'
        this.buyoutPath = '/api/buy'
        this.buysPath = '/api/all/buys'

        this.conectarDB()

        // Middlewares
        this.middlewares();

        this.routes();
    }

    async conectarDB () {
        await dbConnection()
    }

    middlewares() {

        this.app.use( cors() )

        this.app.use(express.json())

        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.productsPath, require('../routes/products'));
        this.app.use(this.categoriesPath, require('../routes/categories'));
        this.app.use(this.usersPath, require('../routes/users'))
        this.app.use(this.buyoutPath, require('../routes/buyout'))
        this.app.use(this.buysPath, require('../routes/buys'))
    }

    listen() {
        this.app.listen(this.port, () => {})
    }
}

module.exports = Server;