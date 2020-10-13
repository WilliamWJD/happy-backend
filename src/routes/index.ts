import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/Upload';

import OrphanagesController from '../controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.store);

export default routes;
