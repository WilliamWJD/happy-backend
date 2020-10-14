import IOrphanageRepository from 'repositories/IOrphanageRepository';
import Orphanage from '../../entities/Orphanage';

interface Images {
  path: string;
}

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Images[];
}

class CreateOrphanageService {
  constructor(private orphanageRepository: IOrphanageRepository) {}

  public async execute({
    name,
    latitude,
    about,
    instructions,
    longitude,
    open_on_weekends,
    opening_hours,
    images,
  }: IRequest): Promise<Orphanage> {
    const checkOrphanageByName = await this.orphanageRepository.findByName(
      name,
    );

    if (checkOrphanageByName) {
      throw Error('This orphanage is already registered');
    }

    const orphanage = await this.orphanageRepository.create({
      name,
      latitude,
      about,
      instructions,
      longitude,
      open_on_weekends,
      opening_hours,
      images,
    });
    return orphanage;
  }
}

export default CreateOrphanageService;
