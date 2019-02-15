import {
  artworksRepository,
  locationsRepository,
  peopleRepository,
  organisationsRepository,
  eventsRepository,
} from '../../utils/hackoss-repo';

/* eslint-disable */
export const createEvent = async data => {
  let { banner, venue, speakers, startTime, endTime, ...others } = data;
  /* eslint-enable */
  const aw = await artworksRepository.getArtworks();
  const loc = await locationsRepository.getLocations();
  const ppl = await peopleRepository.getPeople();
  const org = await organisationsRepository.getOrganisations();
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
  return eventsRepository.createEvent(result);
};
