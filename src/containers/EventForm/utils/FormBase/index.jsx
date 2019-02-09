import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Formik, Field } from 'formik';

import FormField from 'components/FormField';
import { Form } from './style';

const FormBase = ({ config, callback, children }) => (
  <Formik
    initialValues={config.reduce(
      (agg, value) => ({
        [value.key]: value.value,
        ...agg,
      }),
      {},
    )}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      callback(values);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form>
        {config.map(item => (
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
        {children}
        <Button type='submit' disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

FormBase.defaultProps = {
  children: null,
};
FormBase.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object).isRequired,
  callback: PropTypes.func.isRequired,
  children: PropTypes.element,
};
export default FormBase;
