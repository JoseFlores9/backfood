const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.productsPath = '/api/products'

        // Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {

        this.app.use( cors() )
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(this.productsPath, require('../routes/products'));
    }

    listen() {
        this.app.listen(this.port, () => {})
    }
}

module.exports = Server;