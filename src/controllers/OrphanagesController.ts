import { Request, Response } from 'express';

import CreateOrphanageService from '../services/Orphanage/CreateOrphanageService';

class OrphanagesController {
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

      const createOrphanageService = new CreateOrphanageService();

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
