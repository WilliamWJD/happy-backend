import Orphanage from '../../entities/Orphanage';

import OrphanageRepository from '../../repositories/OrphanageRepository';

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

class CreateOrphanageService {
  public async execute({
    name,
    latitude,
    about,
    instructions,
    longitude,
    open_on_weekends,
    opening_hours,
  }: IRequest): Promise<Orphanage> {
    const orphanageRepository = new OrphanageRepository();

    const checkOrphanageByName = await orphanageRepository.findByName(name);

    if (checkOrphanageByName) {
      throw Error('This orphanage is already registered');
    }

    const orphanage = await orphanageRepository.create({
      name,
      latitude,
      about,
      instructions,
      longitude,
      open_on_weekends,
      opening_hours,
    });
    return orphanage;
  }
}

export default CreateOrphanageService;
