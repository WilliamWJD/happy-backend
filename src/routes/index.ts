import { Router } from 'express';

import OrphanagesController from '../controllers/OrphanagesController';

const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.store);

export default routes;
