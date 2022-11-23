const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.productsPath = '/api/products'
        this.categoriesPath = '/api/categories'

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
        this.app.use(this.productsPath, require('../routes/products'));
        this.app.use(this.categoriesPath, require('../routes/categories'));
    }

    listen() {
        this.app.listen(this.port, () => {})
    }
}

module.exports = Server;