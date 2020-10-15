"use strict";

var _FakeOrphanageRepository = _interopRequireDefault(require("../../repositories/fakes/FakeOrphanageRepository"));

var _ListOrphanagesService = _interopRequireDefault(require("./ListOrphanagesService"));

var _CreateOrphanageService = _interopRequireDefault(require("./CreateOrphanageService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let orphanageRepository;
let createOrphanageService;
let listOrphanageService;
describe('ListOrphanages', () => {
  beforeEach(() => {
    orphanageRepository = new _FakeOrphanageRepository.default();
    createOrphanageService = new _CreateOrphanageService.default(orphanageRepository);
    listOrphanageService = new _ListOrphanagesService.default(orphanageRepository);
  });
  it('shoud be able to list orphanages', async () => {
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
    const orphanage2 = await createOrphanageService.execute({
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
    const orphanages = await listOrphanageService.execute();
    expect(orphanages).toEqual([orphanage1, orphanage2]);
  });
});