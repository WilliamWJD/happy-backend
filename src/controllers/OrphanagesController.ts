import { Request, Response } from 'express';

import CreateOrphanageService from '../services/Orphanage/CreateOrphanageService';

class OrphanagesController {
  async store(req: Request, res: Response): Promise<Response> {
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

    return res.json(orphanage);
  }
}

export default new OrphanagesController();
