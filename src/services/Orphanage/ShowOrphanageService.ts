import IOrphanageRepository from 'repositories/IOrphanageRepository';
import Orphanage from '../../entities/Orphanage';

interface IRequest {
  id: number;
}

class CreateOrphanageService {
  constructor(private orphanageRepository: IOrphanageRepository) {}

  public async execute({ id }: IRequest): Promise<Orphanage> {
    const orphanage = await this.orphanageRepository.findById(id);

    if (!orphanage) {
      throw Error('Orphanage not found');
    }

    return orphanage;
  }
}

export default CreateOrphanageService;
