import { Repository, getRepository } from 'typeorm';

import IOrphanage from '../dtos/IOrphanageDTO';

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

  public async findByName(name: string): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepository.findOne({
      where: { name },
    });
    return orphanage || undefined;
  }

  public async find(): Promise<Orphanage[] | undefined> {
    const orphanages = await this.ormRepository.find({ relations: ['images'] });
    return orphanages;
  }

  public async findById(id: number): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepository.findOne(id, {
      relations: ['images'],
    });
    return orphanage;
  }
}

export default OrphanageRepository;
