import { Request, Response } from 'express';
import * as Yup from 'yup';

import OrphanageView from '../views/orphanages_view';

import OrphanageRepository from '../repositories/OrphanageRepository';

import CreateOrphanageService from '../services/Orphanage/CreateOrphanageService';
import ListOrphanagesService from '../services/Orphanage/ListOrphanagesService';
import ShowOrphanageService from '../services/Orphanage/ShowOrphanageService';

class OrphanagesController {
  async index(req: Request, res: Response): Promise<Response> {
    const orphangeRepository = new OrphanageRepository();
    const listOrphanagesService = new ListOrphanagesService(orphangeRepository);

    try {
      const orphanages = await listOrphanagesService.execute();
      return res.json(OrphanageView.renderMany(orphanages));
    } catch (err) {
      return res.json({ error: err.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const orphangeRepository = new OrphanageRepository();
    const showOrphanageService = new ShowOrphanageService(orphangeRepository);

    const { id } = req.params;

    try {
      const orphanage = await showOrphanageService.execute({ id: Number(id) });
      return res.json(OrphanageView.render(orphanage));
    } catch (err) {
      return res.json({ error: err.message });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    const orphangeRepository = new OrphanageRepository();

    const createOrphanageService = new CreateOrphanageService(
      orphangeRepository,
    );

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().max(300).required(),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(
          Yup.object().shape({
            path: Yup.string().required(),
          }),
        ),
      });

      await schema.validate(req.body, { abortEarly: false });

      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      } = req.body;

      const reqImages = req.files as Express.Multer.File[];
      const images = reqImages.map(image => {
        return { path: image.filename };
      });

      const orphanage = await createOrphanageService.execute({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images,
      });

      return res.status(201).json(orphanage);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new OrphanagesController();
