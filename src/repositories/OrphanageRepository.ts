import { Repository, getRepository } from 'typeorm';

import IOrphanage from '../dtos/IOrphanage';

import Orphanage from '../entities/Orphanage';

class OrphanageRepository {
  private ormRepository: Repository<Orphanage>;

  constructor() {
    this.ormRepository = getRepository(Orphanage);
  }

  public async create(data: IOrphanage): Promise<Orphanage> {
    const orphanage = this.ormRepository.create(data);
    await this.ormRepository.save(orphanage);
    return orphanage;
  }
}

export default OrphanageRepository;
