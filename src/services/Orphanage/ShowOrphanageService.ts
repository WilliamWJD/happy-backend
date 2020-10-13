import Orphanage from '../../entities/Orphanage';

import OrphanageRepository from '../../repositories/OrphanageRepository';

interface IRequest {
  id: number;
}

class CreateOrphanageService {
  public async execute({ id }: IRequest): Promise<Orphanage> {
    const orphanageRepository = new OrphanageRepository();

    const orphanage = await orphanageRepository.findById(id);

    if (!orphanage) {
      throw Error('Orphanage not found');
    }

    return orphanage;
  }
}

export default CreateOrphanageService;
