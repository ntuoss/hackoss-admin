import { OrganisationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export default setStatus => async input => {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  const exist = await orgRepo.getOrganisations();
  if (exist.find(org => org.name === input.name)) {
    setStatus('This org exsited in the database');
    return null;
  }
  return orgRepo.createOrganisation(input);
};
