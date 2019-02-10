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

export const prerequisiteConfig = [
  { key: 'label' },
  { key: 'proficiency', value: 'basic' },
  { key: 'referenceUrl' },
];
export const dependencyConfig = [
  { key: 'label' },
  { key: 'specification' },
  { key: 'referenceUrl' },
];
export const speakerConfig = [
  { key: 'person' },
  { key: 'organisation' },
  { key: 'position' },
];
export const friendsConfig = [{ key: 'name' }, { key: 'age' }];

const configReducer = config =>
  config.reduce(
    (agg, value) => ({
      [value.key]: value.value || '',
      ...agg,
    }),
    {},
  );

const basicInitConfig = configReducer([
  ...mainConfig,
  ...booleanConfig,
  ...timeConfig,
]);

export const initConfig = {
  ...basicInitConfig,
  dependencies: [configReducer(dependencyConfig)],
  prerequisites: [configReducer(prerequisiteConfig)],
  speakers: [configReducer(speakerConfig)],
  friends: [configReducer(friendsConfig)],
};

console.log({ dependencies: [configReducer(friendsConfig)] });
