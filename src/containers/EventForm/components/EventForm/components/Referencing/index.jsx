import React from 'react';
import { Field, FieldArray } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import { Grid, GridContainer, FormField } from '../style';

// // export declare class FirebaseEventSpeaker { *
// //   person: firebase.firestore.DocumentReference;
// //   organisation: firebase.firestore.DocumentReference;
// //   position: string;
// // }

/* eslint-disable */
const SecondStep = ({ values, activeStep, errors, touched }) => (
  <GridContainer direction='column'>
    <FieldArray name='speakers'>
      {({ push, remove }) => (
        <>
          {values.speakers &&
            values.speakers.map((v, i) => (
              <GridContainer key={v} spacing={16}>
                <Grid sm={3}>
                  <Field
                    type='text'
                    name={`speakers[${i}].proficiency`}
                    render={({ field }) => (
                      <TextField
                        select
                        label='proficiency'
                        helperText='Select the proficiency'
                        margin='dense'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...field}
                      >
                        {['basic', 'intermediate', 'advanced'].map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid sm={3}>
                  <Field
                    type='text'
                    name={`speakers[${i}].proficiency`}
                    render={({ field }) => (
                      <TextField
                        select
                        label='proficiency'
                        helperText='Select the proficiency'
                        margin='dense'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...field}
                      >
                        {['basic', 'intermediate', 'advanced'].map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid sm={6}>
                  <Field
                    type='text'
                    name={`speakers[${i}].referenceUrl`}
                    render={({ field }) => (
                      <FormField
                        keyword='referenceUrl'
                        {...{ errors, touched, ...field }}
                      />
                    )}
                  />
                </Grid>
                <Grid sm={12}>
                  <Divider />
                </Grid>
              </GridContainer>
            ))}
          <Button
            onClick={() =>
              push({ label: '', proficiency: 'basic', referenceUrl: '' })
            }
          >
            Add
          </Button>
        </>
      )}
    </FieldArray>
  </GridContainer>
);

export default SecondStep;
