import React from 'react';
import { Field, FieldArray } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import Divider from '@material-ui/core/Divider';

import FormField from 'components/FormField';
import { GridContainer, Grid, IconGrid, CancelIcon, AddIcon } from '../style';

// export declare class Prerequisite {
//   label: string;
//   proficiency: Proficiency;
//   referenceUrl: string;
// }

/* eslint-disable */
const SecondStep = ({ values, activeStep, errors, touched }) => (
  <GridContainer direction='column'>
    <FieldArray
      name='prerequisites'
      render={arrayHelpers => (
        <>
          {values.prerequisites &&
            values.prerequisites.map((v, i) => (
              <GridContainer alignItems='flex-end' key={i} spacing={16}>
                <Grid sm={2}>
                  <Field
                    type='text'
                    name={`prerequisites[${i}].label`}
                    render={props => (
                      <FormField variant='outlined' {...props} />
                    )}
                  />
                </Grid>
                <Grid sm={3}>
                  <Field
                    type='text'
                    name={`prerequisites[${i}].proficiency`}
                    render={props => (
                      <FormField
                        select
                        variant='outlined'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...props}
                      >
                        {['basic', 'intermediate', 'advanced'].map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </FormField>
                    )}
                  />
                </Grid>
                <Grid sm={6}>
                  <Field
                    type='text'
                    name={`prerequisites[${i}].referenceUrl`}
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
                  label: '',
                  proficiency: 'basic',
                  referenceUrl: '',
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

export default SecondStep;
