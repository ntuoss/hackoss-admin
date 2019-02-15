import React from 'react';
import * as PropTypes from 'prop-types';
import FormBase from 'containers/EventForm/utils/FormBase';
import { createPerson } from './function';

const config = [
  { key: 'avatarUrl', value: '' },
  { key: 'name', value: '' },
  { key: 'websiteUrl', value: '' },
  { key: 'githubUrl', value: '' },
  { key: 'about', value: '', multiline: true },
];

const PersonForm = ({ setStatus }) => {
  return (
    // prettier-ignore
    <FormBase
      setStatus={setStatus}
      config={config}
      callback={createPerson}
    />
  );
};

PersonForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
export default PersonForm;
