"use strict";

var _FakeOrphanageRepository = _interopRequireDefault(require("../../repositories/fakes/FakeOrphanageRepository"));

var _ShowOrphanageService = _interopRequireDefault(require("./ShowOrphanageService"));

var _CreateOrphanageService = _interopRequireDefault(require("./CreateOrphanageService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let orphanageRepository;
let createOrphanageService;
let showOrphanageService;
describe('ShowOrphanages', () => {
  beforeEach(() => {
    orphanageRepository = new _FakeOrphanageRepository.default();
    createOrphanageService = new _CreateOrphanageService.default(orphanageRepository);
    showOrphanageService = new _ShowOrphanageService.default(orphanageRepository);
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
      images: [{
        path: 'teste.png'
      }]
    });
    await createOrphanageService.execute({
      name: 'Lar das crianças2',
      latitude: -2.123145,
      longitude: -2.123145,
      about: 'teste',
      instructions: 'teste',
      opening_hours: 'teste',
      open_on_weekends: false,
      images: [{
        path: 'teste.png'
      }]
    });
    const orphanages = await showOrphanageService.execute({
      id: orphanage1.id
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
      images: [{
        path: 'teste.png'
      }]
    });
    await expect(showOrphanageService.execute({
      id: 1
    })).rejects.toBeInstanceOf(Error);
  });
});