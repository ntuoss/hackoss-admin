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
  { key: 'eventbriteId', value: '' },
];

const LocationForm = ({ setStatus }) => {
  return <FormBase config={config} callback={createLocation(setStatus)} />;
};

LocationForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
export default LocationForm;
