import React from 'react';

import FormBase from 'containers/EventForm/utils/FormBase';
import { createPerson } from './function';

const config = [
  { key: 'title', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'artistId', value: '' },
];
const PersonForm = () => <FormBase config={config} callback={createPerson} />;

export default PersonForm;
