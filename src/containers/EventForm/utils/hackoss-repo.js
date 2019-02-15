import {
  EventsRepository,
  PeopleRepository,
  LocationsRepository,
  OrganisationsRepository,
  ArtworksRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

// singleton instances
export const firebaseRepository = FirebaseApp;
export const peopleRepository = new PeopleRepository(firebaseRepository);
export const locationsRepository = new LocationsRepository(firebaseRepository);
export const organisationsRepository = new OrganisationsRepository(
  firebaseRepository,
);
export const artworksRepository = new ArtworksRepository(
  firebaseRepository,
  peopleRepository,
);
export const eventsRepository = new EventsRepository(
  firebaseRepository,
  peopleRepository,
  locationsRepository,
  organisationsRepository,
  artworksRepository,
);
