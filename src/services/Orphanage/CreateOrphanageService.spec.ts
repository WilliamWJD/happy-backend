import CreateOrphanageService from './CreateOrphanageService';
import FakeOrphanageRepository from '../../repositories/fakes/FakeOrphanageRepository';

let orphanageRepository: FakeOrphanageRepository;
let createOrphanageService: CreateOrphanageService;

describe('CreateOrphanage', () => {
  beforeEach(() => {
    orphanageRepository = new FakeOrphanageRepository();
    createOrphanageService = new CreateOrphanageService(orphanageRepository);
  });

  it('shoud be able to create a new orphanage', async () => {
    const orphanage = await createOrphanageService.execute({
      name: 'Lar das crianças',
      latitude: -2.123145,
      longitude: -2.123145,
      about: 'teste',
      instructions: 'teste',
      opening_hours: 'teste',
      open_on_weekends: false,
      images: [{ path: 'teste.png' }],
    });

    expect(orphanage).toHaveProperty('id');
  });

  it('should not be able to create a orphanage with duplicated name', async () => {
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
      createOrphanageService.execute({
        name: 'Lar das crianças',
        latitude: -2.123145,
        longitude: -2.123145,
        about: 'teste',
        instructions: 'teste',
        opening_hours: 'teste',
        open_on_weekends: false,
        images: [{ path: 'teste.png' }],
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
