import {
  ArtworkRepository,
  PeopleRepository,
  OrganisationsRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

async function getArtworksBase() {
  const awRepo = new ArtworkRepository(FirebaseApp);
  const artwork = await awRepo.getArtworks();
  return artwork;
}
export async function getArtworks() {
  const data = await getArtworksBase();
  return data.map(item => item.name);
}

async function getPeopleBase() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const people = await pplRepo.getPeople();
  return people;
}
export async function getPeople() {
  const data = await getPeopleBase();
  return data.map(item => item.name);
}
async function getOrgsBase() {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  const orgs = await orgRepo.getOrganisations();
  return orgs;
}
export async function getOrgs() {
  const data = await getOrgsBase();
  return data.map(item => item.name);
}
