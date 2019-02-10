// // export declare class FirebaseEventSpeaker { *
// //   person: firebase.firestore.DocumentReference;
// //   organisation: firebase.firestore.DocumentReference;
// //   position: string;
// // }

/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Field, FieldArray } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import { Grid, GridContainer, IconGrid, CancelIcon, AddIcon } from '../style';
import { getArtworks, getPeople, getOrgs } from './function';
import FormField from 'components/FormField';

/* eslint-disable */
const Referencing = ({ values, activeStep, errors, touched }) => {
  const [person, setPerson] = useState(['...']);
  const [org, setOrg] = useState(['...']);

  useEffect(() => {
    getPeople().then(setPerson);
    getOrgs().then(setOrg);
  }, []);

  return (
    <GridContainer direction='column'>
      <FieldArray
        name='speakers'
        render={arrayHelpers => (
          <>
            {values.speakers &&
              values.speakers.map((v, i) => (
                <GridContainer key={i} alignItems='flex-end' spacing={16}>
                  <Grid sm={3}>
                    <Field
                      type='text'
                      name={`speakers[${i}].person`}
                      render={props => (
                        <FormField
                          select
                          variant='outlined'
                          InputLabelProps={{
                            shrink: true,
                          }}
                          {...props}
                        >
                          {person.map(option => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </FormField>
                      )}
                    />
                  </Grid>
                  <Grid sm={4}>
                    <Field
                      type='text'
                      name={`speakers[${i}].organisation`}
                      render={props => (
                        <FormField
                          select
                          variant='outlined'
                          InputLabelProps={{
                            shrink: true,
                          }}
                          {...props}
                        >
                          {org.map(option => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </FormField>
                      )}
                    />
                  </Grid>
                  <Grid sm={4}>
                    <Field
                      type='text'
                      name={`speakers[${i}].position`}
                      render={FormField}
                    />
                  </Grid>
                  <IconGrid sm={1}>
                    <IconButton onClick={() => arrayHelpers.remove(i)}>
                      <CancelIcon />
                    </IconButton>
                  </IconGrid>
                  <Grid sm={12}>
                    <Divider />
                  </Grid>
                </GridContainer>
              ))}
            <IconGrid container justify='flex-end'>
              <IconButton
                onClick={() =>
                  arrayHelpers.push({
                    person: '',
                    organisation: '',
                    position: '',
                  })
                }
              >
                <AddIcon />
              </IconButton>
            </IconGrid>
          </>
        )}
      />
    </GridContainer>
  );
};
export default Referencing;
