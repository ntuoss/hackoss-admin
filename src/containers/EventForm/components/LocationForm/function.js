import { LocationsRepository } from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

// Should use validation. but we will stick to this for now
export default setStatus => async input => {
  const locRepo = new LocationsRepository(FirebaseApp);
  const exist = await locRepo.getLocations();
  if (exist.find(loc => loc.name === input.name)) {
    setStatus('location existed');
    return null;
  }
  return locRepo.createLocation(input);
};
