import {
  PeopleRepository,
  ArtworksRepository,
  OrganisationsRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

async function getPeopleBase() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const people = await pplRepo.getPeople();
  return people;
}

export async function getOrgs() {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  const orgs = orgRepo.getOrganisations();
  return orgs;
}
export async function getPeople() {
  const people = await getPeopleBase();
  return people.map(person => person.name);
}

export async function getArtworks() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const awRepo = new ArtworksRepository(FirebaseApp, pplRepo);
  const aw = await awRepo.getArtworks();
  return aw;
}
