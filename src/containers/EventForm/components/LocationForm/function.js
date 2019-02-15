import { locationsRepository } from '../../utils/hackoss-repo';

/* eslint-disable */
export const createLocation = async input => {
  const repoLocations = await locationsRepository.getLocations();
  if (repoLocations.find(loc => loc.name === input.name))
    throw new Error('location existed');
  return locationsRepository.createLocation(input);
};
