import FakeOrphanageRepository from '../../repositories/fakes/FakeOrphanageRepository';
import ShowOrphanageService from './ShowOrphanageService';
import CreateOrphanageService from './CreateOrphanageService';

let orphanageRepository: FakeOrphanageRepository;
let createOrphanageService: CreateOrphanageService;
let showOrphanageService: ShowOrphanageService;

describe('ShowOrphanages', () => {
  beforeEach(() => {
    orphanageRepository = new FakeOrphanageRepository();
    createOrphanageService = new CreateOrphanageService(orphanageRepository);
    showOrphanageService = new ShowOrphanageService(orphanageRepository);
  });

  it('shoud be able to list a specific orphanage', async () => {
    const orphanage1 = await createOrphanageService.execute({
      name: 'Lar das crianças',
      latitude: -2.123145,
      longitude: -2.123145,
      about: 'teste',
      instructions: 'teste',
      opening_hours: 'teste',
      open_on_weekends: false,
      images: [{ path: 'teste.png' }],
    });

    await createOrphanageService.execute({
      name: 'Lar das crianças2',
      latitude: -2.123145,
      longitude: -2.123145,
      about: 'teste',
      instructions: 'teste',
      opening_hours: 'teste',
      open_on_weekends: false,
      images: [{ path: 'teste.png' }],
    });

    const orphanages = await showOrphanageService.execute({
      id: orphanage1.id,
    });

    expect(orphanages.name).toBe('Lar das crianças');
  });

  it('should not be able to list a orphanage inexisting', async () => {
    await createOrphanageService.execute({
      name: 'Lar das crianças',
      latitude: -2.123145,
      longitude: -2.123145,
      about: 'teste',
      instructions: 'teste',
      opening_hours: 'teste',
      open_on_weekends: false,
      images: [{ path: 'teste.png' }],
    });

    await expect(
      showOrphanageService.execute({ id: 1 }),
    ).rejects.toBeInstanceOf(Error);
  });
});
