import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnections from './database';

createConnections();
const server = express();

server.use(express.json());
server.use(router);

server.listen(5000, () => {
  console.log('Servidor on na porta 5000');
  console.log('http://localhost:5000/');
});
