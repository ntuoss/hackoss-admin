import { OrganisationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getOrgs() {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  orgRepo.getOrganisations().then(orgs => {
    console.log(orgs);
  });
}

export const createOrg = setStatus => async org => {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  orgRepo.createOrganisation(org).then(() => setStatus('success'));
};
