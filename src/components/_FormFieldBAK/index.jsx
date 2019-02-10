import React from 'react';
import * as PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const FormField = ({
  keyword,
  placeholder,
  touched,
  errors,
  multiline,
  isTime,
  ...others
}) =>
  isTime ? (
    <TextField
      margin='dense'
      label={placeholder || keyword}
      type='datetime-local'
      InputLabelProps={{
        shrink: true,
      }}
      error={!!(touched[keyword] && errors[keyword])}
      {...others}
    />
  ) : (
    <TextField
      label={placeholder || keyword}
      margin='dense'
      multiline
      rows={multiline ? 3 : 1}
      helperText={errors[keyword]}
      error={!!(touched[keyword] && errors[keyword])}
      {...others}
    />
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
