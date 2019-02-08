import React from 'react';
import * as PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';

const FormField = ({
  keyword,
  placeholder,
  touched,
  errors,
  multiline,
  ...others
}) => (
  <FormControl
    style={{ marginBottom: '1rem' }}
    error={!!(touched[keyword] && errors[keyword])}
  >
    <InputLabel htmlFor={keyword}>{placeholder || keyword}</InputLabel>
    <Input
      autoComplete='off'
      id={keyword}
      {...others}
      multiline
      rows={multiline ? 3 : 1}
    />
    {touched[keyword] && errors[keyword] && (
      <FormHelperText id='component-error-text'>
        {errors[keyword]}
      </FormHelperText>
    )}
  </FormControl>
);

FormField.defaultProps = {
  placeholder: '',
  multiline: false,
};

FormField.propTypes = {
  keyword: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  multiline: PropTypes.bool,
};

export default FormField;
