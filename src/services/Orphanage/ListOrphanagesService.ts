import Orphanage from '../../entities/Orphanage';

import OrphanageRepository from '../../repositories/OrphanageRepository';

class CreateOrphanageService {
  public async execute(): Promise<Orphanage[] | undefined> {
    const orphanageRepository = new OrphanageRepository();
    const orphanages = await orphanageRepository.find();
    return orphanages;
  }
}

export default CreateOrphanageService;
