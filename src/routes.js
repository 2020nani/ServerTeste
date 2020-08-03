import { Router } from 'express';
import DadosController from './app/controllers/DadosController';

const routes = new Router();
routes.post('/dados', DadosController.store);
routes.put('/dados/:id', DadosController.update);
routes.delete('/dados/:id', DadosController.delete);
routes.get('/dados', DadosController.index);
routes.get('/dados/:id', DadosController.index1)

module.exports = routes;