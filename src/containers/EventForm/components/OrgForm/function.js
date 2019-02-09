import { OrganisationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getOrgs() {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  orgRepo.getOrganisations().then(orgs => {
    console.log(orgs);
  });
}

export function createOrg(org) {
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  orgRepo.createOrganisation(org).then(getOrgs);
}
