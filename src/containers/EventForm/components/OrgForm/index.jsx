import React from 'react';

import FormBase from 'containers/EventForm/utils/FormBase';
import { createOrg } from './function';

const config = [
  { key: 'avatarUrl', value: '' },
  { key: 'name', value: '' },
  { key: 'websiteUrl', value: '' },
  { key: 'githubUrl', value: '' },
  { key: 'about', value: '', multiline: true },
];

const PersonForm = () => <FormBase config={config} callback={createOrg} />;

export default PersonForm;
