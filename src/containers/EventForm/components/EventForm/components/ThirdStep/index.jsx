import React from 'react';
import { Field, FieldArray } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import { Grid, GridContainer, FormField } from '../style';

// export declare class Prerequisite {
//   label: string;
//   proficiency: Proficiency;
//   referenceUrl: string;
// }

/* eslint-disable */
const SecondStep = ({ values, activeStep, errors, touched }) => (
  <GridContainer direction='column'>
    <FieldArray name='prerequisites'>
      {({ push, remove }) => (
        <>
          {values.prerequisites &&
            values.prerequisites.map((v, i) => (
              <GridContainer key={v} spacing={16}>
                <Grid sm={2}>
                  <Field
                    type='text'
                    name={`prerequisites[${i}].label`}
                    render={({ field }) => (
                      <FormField
                        keyword='label'
                        variant='outlined'
                        {...{ errors, touched, ...field }}
                      />
                    )}
                  />
                </Grid>
                <Grid sm={3}>
                  <Field
                    type='text'
                    name={`prerequisites[${i}].proficiency`}
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
                <Grid sm={7}>
                  <Field
                    type='text'
                    name={`prerequisites[${i}].referenceUrl`}
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
              push({ label: '', proficiency: '', referenceUrl: '' })
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
