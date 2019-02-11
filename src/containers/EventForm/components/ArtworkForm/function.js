import { ArtworksRepository, PeopleRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

async function getPeopleBase() {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const people = await pplRepo.getPeople();
  return people;
}
export async function getPeople() {
  const people = await getPeopleBase();
  return people.map(person => person.name);
}

export const createArtwork = setStatus => async input => {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const awRepo = new ArtworksRepository(FirebaseApp, pplRepo);
  const exist = await awRepo.getArtworks();
  if (exist.find(aw => aw.title === input.title)) {
    setStatus('Artwork existed');
    return null;
  }
  let { artistId } = input;
  const people = await getPeopleBase();
  const matchedPerson = people.find(person => person.name === artistId);
  artistId = matchedPerson.id;
  const result = { ...input, artistId, eventbriteId: '' };
  return awRepo.createArtwork(result);
};
