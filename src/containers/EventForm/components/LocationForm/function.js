import { LocationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export function getLocations() {
  const locRepo = new LocationsRepository(FirebaseApp);
  locRepo.getLocations().then(loc => {
    console.log(loc);
  });
}

// Should use validation. but we will stick to this for now
export const createLocation = setStatus => async input => {
  const locRepo = new LocationsRepository(FirebaseApp);
  const exist = await locRepo.getLocations();
  if (exist.find(loc => loc.name === input.name)) {
    setStatus('location existed');
    return input;
  }
  const status = await locRepo.createLocation(input);
  setStatus(status || 'error');
  return input;
};
