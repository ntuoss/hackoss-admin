import React, { useState } from 'react';

import SnackBar from 'components/SnackBar';
import FormBase from 'containers/EventForm/utils/FormBase';
import { createOrg } from './function';

const config = [
  { key: 'avatarUrl', value: '' },
  { key: 'name', value: '' },
  { key: 'websiteUrl', value: '' },
  { key: 'githubUrl', value: '' },
  { key: 'about', value: '', multiline: true },
];

const OrgForm = () => {
  const [status, setStatus] = useState('');
  return (
    <>
      <FormBase config={config} callback={createOrg(setStatus)} />
      {status && <SnackBar status={status} />}
    </>
  );
};
export default OrgForm;
