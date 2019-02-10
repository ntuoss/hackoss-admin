import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'formik';

import FormBase from 'containers/EventForm/utils/FormBase';
import Snackbar from 'components/SnackBar';
import { createArtwork, getPeople } from './function';

const config = [
  { key: 'title', value: '' },
  { key: 'imageUrl', value: '' },
  { key: 'artistId', value: '', except: true },
];

const PersonForm = () => {
  const [peopleList, setPeopleList] = useState(['...']);
  const [status, setStatus] = useState('');
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
      {status && <Snackbar status={status} />}
    </FormBase>
  );
};

export default PersonForm;
