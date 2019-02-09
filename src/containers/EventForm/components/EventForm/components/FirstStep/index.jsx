import React from 'react';
import { Field } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FormField from 'components/FormField';
import { GridContainer, Grid, FieldWrapper } from '../style';
import { mainConfig, booleanConfig, timeConfig } from '../../config';

/* eslint-disable */
const FirstStep = ({ activeStep, errors, touched }) => (
  <GridContainer>
    <FieldWrapper sm={6}>
      {mainConfig.map(item => (
        <Field
          key={item.key}
          type={item.type || 'text'}
          name={item.key}
          render={({ field }) => (
            <FormField
              keyword={item.key}
              multiline={item.multiline}
              isTime={item.isTime}
              {...{ errors, touched, ...field }}
            />
          )}
        />
      ))}
    </FieldWrapper>
    <FieldWrapper
      container
      sm={6}
      direction='column'
      alignItems='stretch'
      spacing={16}
    >
      <Grid>
        {booleanConfig.map(item => (
          <Field
            key={item.key}
            type={item.type || 'text'}
            name={item.key}
            render={({ field }) => (
              <FormControlLabel
                keyword={item.key}
                control={<Checkbox color='primary' />}
                label={item.key}
                {...{ errors, touched, ...field }}
              />
            )}
          />
        ))}
      </Grid>
      <Grid>
        <FieldWrapper>
          {timeConfig.map(item => (
            <Field
              key={item.key}
              type={item.type || 'text'}
              name={item.key}
              render={({ field }) => (
                <FormField
                  keyword={item.key}
                  multiline={item.multiline}
                  isTime={item.isTime}
                  {...{ errors, touched, ...field }}
                />
              )}
            />
          ))}
        </FieldWrapper>
      </Grid>
    </FieldWrapper>
  </GridContainer>
);

export default FirstStep;
