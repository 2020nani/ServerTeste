import { Router } from 'express';
import DadosController from './app/controllers/DadosController';

const routes = new Router();
routes.post('/dados', DadosController.store);
routes.get('/dados', DadosController.index);

module.exports = routes;