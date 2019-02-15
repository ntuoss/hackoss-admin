import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'formik';

import FormField from 'components/FormField';
import FormBase from 'containers/EventForm/utils/FormBase';
import { createArtwork, getPeopleNames } from './function';

const config = [
  { key: 'title', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'artistId', value: '', except: true },
];

const ArtworkForm = ({ setStatus }) => {
  const [people, setPeople] = useState(['...']);
  let isMounted;
  useEffect(() => {
    isMounted = true;
    getPeopleNames().then(val => isMounted && setPeople(val));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <FormBase setStatus={setStatus} config={config} callback={createArtwork}>
      <Field
        type='text'
        name='artistId'
        render={props => (
          <FormField
            select
            label='Artist'
            InputLabelProps={{
              shrink: true,
            }}
            {...props}
          >
            {people.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </FormField>
        )}
      />
    </FormBase>
  );
};
ArtworkForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default ArtworkForm;
