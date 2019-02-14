import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';

import FormField from 'components/FormField';
import { getArtworks, getLocations } from './function';
import { GridContainer, Grid, FieldWrapper } from '../style';
import { mainConfig, booleanConfig, timeConfig } from '../../config';

/* eslint-disable */
const FirstStep = ({ activeStep, errors, touched }) => {
  const [venues, setVenues] = useState(['']);
  const [banners, setBanner] = useState(['']);
  let isMounted;
  useEffect(() => {
    isMounted = true;
    getArtworks().then(val => isMounted && setBanner(val));
    getLocations().then(val => isMounted && setVenues(val));
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <GridContainer>
      <FieldWrapper sm={6}>
        {mainConfig.map(item => (
          <Field
            key={item.key}
            type={item.type || 'text'}
            name={item.key}
            render={props => (
              <FormField
                multiline={item.multiline}
                rows={item.multiline ? 3 : 1}
                {...props}
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
              component={({
                field: { value, ...others },
                form: { errors, touched, setFieldValue },
                label,
                ...props
              }) => (
                <FormControlLabel
                  keyword={item.key}
                  label={item.key}
                  control={
                    <Checkbox
                      color='primary'
                      value={value.toString()}
                      checked={value}
                      {...props}
                      {...others}
                    />
                  }
                />
              )}
              name={item.key}
              label={item.key}
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
                render={props => (
                  <FormField
                    type='datetime-local'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...props}
                  />
                )}
              />
            ))}
          </FieldWrapper>
        </Grid>
        <Grid>
          <FieldWrapper>
            <Field
              key='venue'
              name='venue'
              render={props => (
                <FormField
                  select
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...props}
                >
                  {venues.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </FormField>
              )}
            />
          </FieldWrapper>
        </Grid>
        <Grid>
          <FieldWrapper>
            <Field
              key='banner'
              name='banner'
              render={props => (
                <FormField
                  select
                  variant='outlined'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...props}
                >
                  {banners.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </FormField>
              )}
            />
          </FieldWrapper>
        </Grid>
      </FieldWrapper>
    </GridContainer>
  );
};
export default FirstStep;
