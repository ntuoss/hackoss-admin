import { LocationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getLocations() {
  const locRepo = new LocationsRepository(FirebaseApp);
  locRepo.getLocations().then(people => {
    console.log(people);
  });
}

export const createLocation = setStatus => async people => {
  const locRepo = new LocationsRepository(FirebaseApp);
  locRepo.createLocation(people).then(() => {
    setStatus('error');
  });
};
