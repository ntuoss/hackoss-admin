import { organisationsRepository } from '../../utils/hackoss-repo';

/* eslint-disable */
export const createOrg = async input => {
  const exist = await organisationsRepository.getOrganisations();
  if (exist.find(org => org.name === input.name)) {
    throw new Error('This org exsited in the database');
  }
  return organisationsRepository.createOrganisation(input);
};
