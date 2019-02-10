import {
  ArtworksRepository,
  LocationsRepository,
  PeopleRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

async function getArtworksBase() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const awRepo = new ArtworksRepository(FirebaseApp, pplRepo);
  const artwork = await awRepo.getArtworks();
  return artwork;
}
async function getLocationsBase() {
  const awRepo = new LocationsRepository(FirebaseApp);
  const artwork = await awRepo.getLocations();
  return artwork;
}
export async function getArtworks() {
  const data = await getArtworksBase();
  return data.map(item => item.name);
}

export async function getLocations() {
  const data = await getLocationsBase();
  return data.map(item => item.name);
}
