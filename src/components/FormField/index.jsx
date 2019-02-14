import React from 'react';
import TextField from '@material-ui/core/TextField';

/* eslint-disable */
export default ({ field, form, children, multiline, ...props }) => (
  <TextField
    type='text'
    margin='normal'
    label={field.name.split('.')[1] || field.name}
    multiline={multiline}
    rows={multiline ? 3 : 1}
    {...field}
    {...props}
    error={!!(form.touched[field.name] && form.errors[field.name])}
    helperText={
      form.touched[field.name] && form.errors[field.name]
        ? form.errors[field.name]
        : ''
    }
  >
    {children}
  </TextField>
);
