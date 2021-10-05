const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userRouterPath = '/api/user';
        this.middlerwares();
        this.routes();
    }

    routes() {
        this.app.use(this.userRouterPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Run service in port', process.env.PORT);
        });
    }

    middlerwares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
}

module.exports = Server;