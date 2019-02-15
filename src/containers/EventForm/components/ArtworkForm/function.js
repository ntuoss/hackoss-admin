import { artworksRepository, peopleRepository } from '../../utils/hackoss-repo';

async function getPeople() {
  const people = await peopleRepository.getPeople();
  return people;
}
export async function getPeopleNames() {
  const people = await getPeople();
  return people.map(person => person.name);
}

export const createArtwork = async ({
  title,
  artistId: artistName,
  ...props
}) => {
  const exist = await artworksRepository.getArtworks();
  if (exist.find(aw => aw.title === title)) throw new Error('Artwork existed');
  const names = await getPeople();
  const artistId = names.find(name => name.name === artistName).id;
  const result = { ...props, title, artistId };
  return artworksRepository.createArtwork(result);
};
