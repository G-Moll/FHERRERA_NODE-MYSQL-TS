import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

export const name = "Jesùs";
console.log( name );

const server = new Server();
server.listen();
