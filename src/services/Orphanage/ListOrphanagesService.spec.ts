import FakeOrphanageRepository from '../../repositories/fakes/FakeOrphanageRepository';
import ListOrphanageService from './ListOrphanagesService';
import CreateOrphanageService from './CreateOrphanageService';

let orphanageRepository: FakeOrphanageRepository;
let createOrphanageService: CreateOrphanageService;
let listOrphanageService: ListOrphanageService;

describe('CreateOrphanage', () => {
  beforeEach(() => {
    orphanageRepository = new FakeOrphanageRepository();
    createOrphanageService = new CreateOrphanageService(orphanageRepository);
    listOrphanageService = new ListOrphanageService(orphanageRepository);
  });

  it('shoud be able to create a new orphanage', async () => {
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

    const orphanage2 = await createOrphanageService.execute({
      name: 'Lar das crianças2',
      latitude: -2.123145,
      longitude: -2.123145,
      about: 'teste',
      instructions: 'teste',
      opening_hours: 'teste',
      open_on_weekends: false,
      images: [{ path: 'teste.png' }],
    });

    const orphanages = await listOrphanageService.execute();

    expect(orphanages).toEqual([orphanage1, orphanage2]);
  });
});
