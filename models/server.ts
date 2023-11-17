import express, { Application } from 'express';
import userRoutes from '../routes/users.routes';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.routes();
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( "Server running on port " + this.port );
        });
    }

    routes() {
        this.app.use( this.apiPaths.users, userRoutes  );
    }

}

export default Server;
