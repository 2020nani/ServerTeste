import 'dotenv/config'

import express from 'express';
import routes from './routes';
import './database';
import cors from 'cors'
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      this.server.use(cors())
      next()
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
