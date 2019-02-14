import {
  ArtworksRepository,
  PeopleRepository,
  LocationsRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

async function getArtworksBase() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const awRepo = new ArtworksRepository(FirebaseApp, pplRepo);
  const artwork = await awRepo.getArtworks();
  return artwork;
}
async function getLocationsBase() {
  const locRepo = new LocationsRepository(FirebaseApp);
  const loc = await locRepo.getLocations();
  return loc;
}
export async function getArtworks() {
  const data = await getArtworksBase();
  return data.length > 0 ? data.map(item => item.title) : ['Nothing created'];
}

export async function getLocations() {
  const data = await getLocationsBase();
  return data.length > 0 ? data.map(item => item.name) : ['Nothing created'];
}
