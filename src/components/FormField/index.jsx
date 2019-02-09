import React from 'react';
import * as PropTypes from 'prop-types';
import { FormControl, TextField } from '@material-ui/core';

const FormField = ({
  keyword,
  placeholder,
  touched,
  errors,
  multiline,
  isTime,
  ...others
}) => (
  <FormControl error={!!(touched[keyword] && errors[keyword])}>
    {isTime ? (
      <TextField
        margin='dense'
        label={placeholder || keyword}
        type='datetime-local'
        // defaultValue='2019-01-01T18:30'
        InputLabelProps={{
          shrink: true,
        }}
        {...others}
      />
    ) : (
      <TextField
        label={placeholder || keyword}
        margin='dense'
        multiline
        rows={multiline ? 3 : 1}
        {...others}
        helperText={errors[keyword]}
      />
    )}
  </FormControl>
);

FormField.defaultProps = {
  placeholder: '',
  multiline: false,
  isTime: false,
};

FormField.propTypes = {
  keyword: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  multiline: PropTypes.bool,
  isTime: PropTypes.bool,
};

export default FormField;
