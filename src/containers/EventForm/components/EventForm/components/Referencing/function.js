import {
  ArtworkRepository,
  PeopleRepository,
  OrganisationsRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export async function getArtworks() {
  const awRepo = new ArtworkRepository(FirebaseApp);
  const artwork = await awRepo.getArtworks();
  return artwork;
}

export async function getPeople() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const people = await pplRepo.getPeople();
  return people;
}
export async function getOrgs() {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  const orgs = await orgRepo.getOrganisations();
  return orgs;
}
