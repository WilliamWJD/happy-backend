import { Request, Response } from 'express';

import CreateOrphanageService from '../services/Orphanage/CreateOrphanageService';
import ListOrphanagesService from '../services/Orphanage/ListOrphanagesService';
import ShowOrphanageService from '../services/Orphanage/ShowOrphanageService';

const createOrphanageService = new CreateOrphanageService();
const listOrphanagesService = new ListOrphanagesService();
const showOrphanageService = new ShowOrphanageService();

class OrphanagesController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const orphanages = await listOrphanagesService.execute();
      return res.json(orphanages);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const orphanage = await showOrphanageService.execute({ id: Number(id) });
      return res.json(orphanage);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      } = req.body;

      const orphanage = await createOrphanageService.execute({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      });

      return res.status(201).json(orphanage);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new OrphanagesController();
