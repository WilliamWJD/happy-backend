import IOrphanage from 'dtos/IOrphanageDTO';
import Orphanage from '../entities/Orphanage';

export default interface IOrphanageRepository {
  create(data: IOrphanage): Promise<Orphanage>;
  findByName(name: string): Promise<Orphanage | undefined>;
  find(): Promise<Orphanage[] | undefined>;
  findById(id: number): Promise<Orphanage | undefined>;
}
