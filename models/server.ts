import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/users.routes';
import db from '../db/connections';


class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( "Server running on port " + this.port );
        });
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log( "DB online..."  );
        }
        catch( error: any ) {
            throw new Error( error );
        }
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use( this.apiPaths.users, userRoutes  );
    }

}

export default Server;
