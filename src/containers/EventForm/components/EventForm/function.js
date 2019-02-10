import {
  PeopleRepository,
  ArtworksRepository,
  OrganisationsRepository,
  LocationsRepository,
  EventsRepository,
} from 'hackoss';
import { FirebaseApp } from 'utils/firebase';

export default async function createEvent(data) {
  const pplRepo = new PeopleRepository(FirebaseApp);
  const locRepo = new LocationsRepository(FirebaseApp);
  const orgRepo = new OrganisationsRepository(FirebaseApp);
  const awRepo = new ArtworksRepository(FirebaseApp, pplRepo);
  const eventRepo = new EventsRepository(
    FirebaseApp,
    pplRepo,
    locRepo,
    orgRepo,
    awRepo,
  );
  /* eslint-disable */
  let { banner, venue, speakers, startTime, endTime, ...others } = data;
  /* eslint-enable */
  const aw = await awRepo.getArtworks();
  const loc = await locRepo.getLocations();
  const ppl = await pplRepo.getPeople();
  const org = await orgRepo.getOrganisations();
  startTime = new Date(startTime);
  endTime = new Date(endTime);
  const bannerId = aw.find(item => item.title === banner).id;
  const venueId = loc.find(item => item.name === venue).id;
  speakers = speakers.map(item => {
    const { person, organisation } = item;
    const personId = ppl.find(v => v.name === person).id;
    const organisationId = org.find(v => v.name === organisation).id;
    return { ...item, personId, organisationId };
  });

  const result = { ...data, bannerId, venueId, speakers, startTime, endTime };
  return eventRepo.createEvent(result);
}
