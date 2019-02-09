import React from 'react';

import FormBase from 'containers/EventForm/utils/FormBase';
import { createLocation } from './function';

const config = [
  { key: 'name', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'addressLine1', value: '' },
  { key: 'addressLine2', value: '' },
  { key: 'seatingCapacity', value: 100 },
  { key: 'eventbriteId', value: '' },
];

const LocationForm = () => (
  <FormBase config={config} callback={createLocation} />
);

export default LocationForm;
