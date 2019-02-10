import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'formik';

import FormField from 'components/FormField';
import FormBase from 'containers/EventForm/utils/FormBase';
import { createArtwork, getPeople } from './function';

const config = [
  { key: 'title', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'artistId', value: '', except: true },
];

const ArtworkForm = ({ setStatus }) => {
  const [peopleList, setPeopleList] = useState(['...']);
  useEffect(() => {
    getPeople().then(setPeopleList);
  }, []);

  return (
    <FormBase config={config} callback={createArtwork(setStatus)}>
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
            {peopleList.map(option => (
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
