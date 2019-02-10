import React from 'react';
import { Field, FieldArray } from 'formik';
import Divider from '@material-ui/core/Divider';
import FormArrayField from 'components/FormArrayField';
import IconButton from '@material-ui/core/IconButton';
import { GridContainer, Grid, IconGrid, CancelIcon, AddIcon } from '../style';

// export declare class Dependency {
//   label: string;
//   specification: string;
//   referenceUrl: string;
// }

/* eslint-disable */
const SecondStep = ({ values, activeStep, errors, touched }) => (
  <GridContainer direction='column'>
    <FieldArray
      name='dependencies'
      render={arrayHelpers => (
        <>
          {values.dependencies &&
            values.dependencies.map((v, i) => (
              <GridContainer key={i} direction='row' spacing={16}>
                <Grid sm={2}>
                  <Field
                    type='text'
                    name={`dependencies[${i}].label`}
                    render={props => (
                      <FormArrayField variant='outlined' {...props} />
                    )}
                  />
                </Grid>
                <Grid sm={3}>
                  <Field
                    type='text'
                    name={`dependencies[${i}].specification`}
                    render={FormArrayField}
                  />
                </Grid>
                <Grid sm={6}>
                  <Field
                    type='text'
                    name={`dependencies[${i}].referenceUrl`}
                    render={FormArrayField}
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
                  specification: '',
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
