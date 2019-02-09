import React from 'react';
import { Field, FieldArray } from 'formik';
import Button from '@material-ui/core/Button';

import { GridContainer, Grid, FormField } from '../style';

// export declare class Dependency {
//   label: string;
//   specification: string;
//   referenceUrl: string;
// }

/* eslint-disable */
const SecondStep = ({ values, activeStep, errors, touched }) => (
  <GridContainer direction='column'>
    <FieldArray name='dependencies'>
      {({ push, remove }) => (
        <>
          {values.dependencies &&
            values.dependencies.map((v, i) => (
              <GridContainer key={v} direction='row' spacing={16}>
                <Grid sm={2}>
                  <Field
                    type='text'
                    name={`dependencies[${i}].label`}
                    render={({ field }) => (
                      <FormField
                        variant='outlined'
                        keyword='label'
                        {...{ errors, touched, ...field }}
                      />
                    )}
                  />
                </Grid>
                <Grid sm={3}>
                  <Field
                    type='text'
                    name={`dependencies[${i}].specification`}
                    render={({ field }) => (
                      <FormField
                        keyword='specification'
                        {...{ errors, touched, ...field }}
                      />
                    )}
                  />
                </Grid>
                <Grid sm={7}>
                  <Field
                    type='text'
                    name={`dependencies[${i}].referenceUrl`}
                    render={({ field }) => (
                      <FormField
                        keyword='referenceUrl'
                        {...{ errors, touched, ...field }}
                      />
                    )}
                  />
                </Grid>
              </GridContainer>
            ))}
          <Button
            onClick={() =>
              push({ label: '', specification: '', referenceUrl: '' })
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
