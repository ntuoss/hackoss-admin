import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field } from 'formik';

import FormField from 'components/FormField';
import { Form } from './style';

const PersonForm = () => (
  <Formik
    onSubmit={(values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form>
        <Field
          type='text'
          name='avatarUrl'
          render={({ field }) => (
            <FormField keyword='avatarUrl' {...{ errors, touched, ...field }} />
          )}
        />
        <Field
          type='text'
          name='Name'
          render={({ field }) => (
            <FormField keyword='name' {...{ errors, touched, ...field }} />
          )}
        />
        <Field
          type='text'
          name='githubUrl'
          render={({ field }) => (
            <FormField keyword='githubUrl' {...{ errors, touched, ...field }} />
          )}
        />
        <Field
          type='text'
          name='websiteUrl'
          render={({ field }) => (
            <FormField
              keyword='websiteUrl'
              {...{ errors, touched, ...field }}
            />
          )}
        />
        <Field
          type='text'
          name='about'
          render={({ field }) => (
            <FormField
              keyword='about'
              {...{ errors, touched, multiline: true, ...field }}
            />
          )}
        />
        <Button type='submit' disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default PersonForm;
