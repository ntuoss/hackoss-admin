import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'formik';

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
        render={({ field }) => (
          <TextField
            select
            label='Artist'
            helperText='Choose the artist for the artwork'
            margin='dense'
            InputLabelProps={{
              shrink: true,
            }}
            {...field}
          >
            {peopleList.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </FormBase>
  );
};
ArtworkForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default ArtworkForm;
