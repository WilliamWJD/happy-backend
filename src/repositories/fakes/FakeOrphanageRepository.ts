import IOrphanageRepository from 'repositories/IOrphanageRepository';
import Orphanage from '../../entities/Orphanage';
import IOrphanage from '../../dtos/IOrphanageDTO';

class FakeOrphanageRepository implements IOrphanageRepository {
  private orphanages: Orphanage[] = [];

  public async create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
    images,
  }: IOrphanage): Promise<Orphanage> {
    const orphanage = new Orphanage();

    Object.assign(orphanage, {
      id: (new Date().getTime() / 100) * Math.random(),
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    this.orphanages.push(orphanage);

    return orphanage;
  }

  public async findByName(name: string): Promise<Orphanage | undefined> {
    const orphanage = this.orphanages.find(orpha => orpha.name === name);
    return orphanage;
  }

  public async find(): Promise<Orphanage[] | undefined> {
    const { orphanages } = this;
    return orphanages || undefined;
  }

  public async findById(id: number): Promise<Orphanage | undefined> {
    const orphanage = this.orphanages.find(orpha => orpha.id === id);
    return orphanage || undefined;
  }
}

export default FakeOrphanageRepository;
