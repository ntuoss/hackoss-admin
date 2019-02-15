import React from 'react';
import * as PropTypes from 'prop-types';

import FormBase from 'containers/EventForm/utils/FormBase';
import { createLocation } from './function';

const config = [
  { key: 'name', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'addressLine1', value: '' },
  { key: 'addressLine2', value: '' },
  { key: 'seatingCapacity', value: 502 },
];

const LocationForm = ({ setStatus }) => {
  return (
    /* prettier-ignore */
    <FormBase
      setStatus={setStatus}
      config={config}
      callback={createLocation}
    />
  );
};

LocationForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
export default LocationForm;
