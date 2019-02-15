const prerequisiteConfig = [
  { key: 'label' },
  { key: 'proficiency', value: 'basic' },
  { key: 'referenceUrl' },
];
const dependencyConfig = [
  { key: 'label' },
  { key: 'specification' },
  { key: 'referenceUrl' },
];
const speakerConfig = [
  { key: 'person' },
  { key: 'organisation' },
  { key: 'position' },
];

/* eslint-disable */
// these two are optional field that
// shouldn't be dealt with on front end
const facebook = [
  { key: 'id' },
  { key: 'status', value: 'draft' },
  { key: 'url' },
];
const eventbrite = [
  { key: 'id' },
  { key: 'status', value: 'draft' },
  { key: 'url' },
];

const configReducer = config =>
  config.reduce(
    (agg, value) => ({
      [value.key]: value.value || value.value === false ? value.value : '',
      ...agg,
    }),
    {},
  );

export const mainConfig = [
  { key: 'tgif' },
  { key: 'title' },
  { key: 'tagline' },
  { key: 'githubUrl' },
  { key: 'description', multiline: true },
  { key: 'promotion', multiline: true },
  { key: 'remarks' },
];
export const booleanConfig = [
  { key: 'isPublic', value: false },
  { key: 'isExternal', value: false },
  { key: 'hasFood', value: false },
  { key: 'hasDrinks', value: false },
];
export const timeConfig = [
  { key: 'startTime', isTime: true, value: '2019-01-01T18:30' },
  { key: 'endTime', isTime: true, value: '2019-01-01T18:30' },
];

const basicInitConfig = configReducer([
  ...mainConfig,
  ...booleanConfig,
  ...timeConfig,
]);

export const initConfig = {
  venue: '',
  banner: '',
  status: 'draft',
  dependencies: [configReducer(dependencyConfig)],
  prerequisites: [configReducer(prerequisiteConfig)],
  speakers: [configReducer(speakerConfig)],
  ...basicInitConfig,
};
