import React from 'react';
import * as PropTypes from 'prop-types';

import FormBase from 'containers/EventForm/utils/FormBase';
import { createOrg } from './function';

const config = [
  { key: 'avatarUrl', value: '' },
  { key: 'name', value: '' },
  { key: 'websiteUrl', value: '' },
  { key: 'githubUrl', value: '' },
  { key: 'about', value: '', multiline: true },
];

const OrgForm = ({ setStatus }) => {
  return (
    // prettier-ignore
    <FormBase
      setStatus={setStatus}
      config={config}
      callback={createOrg}
    />
  );
};

OrgForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
export default OrgForm;
