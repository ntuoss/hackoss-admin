import { OrganisationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getOrgs() {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  orgRepo.getOrganisations().then(orgs => {
    console.log(orgs);
  });
}

export const createOrg = setStatus => async input => {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  const exist = await orgRepo.getOrganisations();
  if (exist.find(org => org.name === input.name)) {
    setStatus('This org exsited in the database');
    return null;
  }
  return orgRepo.createOrganisation(input);
};
