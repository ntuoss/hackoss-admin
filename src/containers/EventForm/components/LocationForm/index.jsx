import React, { useState } from 'react';

import SnackBar from 'components/SnackBar';
import FormBase from 'containers/EventForm/utils/FormBase';
import { createLocation } from './function';

const config = [
  { key: 'name', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'addressLine1', value: '' },
  { key: 'addressLine2', value: '' },
  { key: 'seatingCapacity', value: 502 },
  { key: 'eventbriteId', value: '' },
];

const LocationForm = () => {
  const [status, setStatus] = useState('');
  return (
    <>
      <FormBase config={config} callback={createLocation(setStatus)} />
      {status && <SnackBar status={status} />}
    </>
  );
};

export default LocationForm;
