import ImagesDTO from './ImagesDTO';

export default interface IOrphanage {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: ImagesDTO[];
}
