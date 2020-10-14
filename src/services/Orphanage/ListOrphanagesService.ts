import IOrphanageRepository from 'repositories/IOrphanageRepository';
import Orphanage from '../../entities/Orphanage';

class CreateOrphanageService {
  constructor(private orphanageRepository: IOrphanageRepository) {}

  public async execute(): Promise<Orphanage[] | undefined> {
    const orphanages = await this.orphanageRepository.find();
    return orphanages;
  }
}

export default CreateOrphanageService;
