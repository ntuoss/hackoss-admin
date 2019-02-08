import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Input,
  InputLabel,
  InputAdornment,
  Button,
  IconButton,
} from '@material-ui/core';

import FormField from 'components/FormField';
import { Formik, Field } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { withFirebase } from 'utils/firebase';
import { DASHBOARD } from 'routes';
import { Form, FormControl } from './style';

class Signin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  render() {
    /* eslint-disable */
    const { firebase, history } = this.props;
    const { showPassword } = this.state;

    return (
      <Formik
        initialValues={{
          email:
            process.env.REACT_APP_STAGE !== 'production'
              ? process.env.REACT_APP_FIREBASE_EMAIL
              : '',
          password:
            process.env.REACT_APP_STAGE !== 'production'
              ? process.env.REACT_APP_FIREBASE_PASSWORD
              : '',
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^ntuoss@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          firebase
            .signin(values.email, values.password)
            .then()
            .then(() => {
              setSubmitting(false);
              history.push(DASHBOARD);
            })
            .catch(e => {
              alert(e);
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, errors, status, touched }) => (
          <Form>
            <Field
              type='email'
              name='email'
              render={({ field }) => (
                <FormField keyword='email' {...{ errors, touched, ...field }} />
              )}
            />
            <Field
              type='password'
              name='password'
              render={({ field }) => (
                <FormControl>
                  <InputLabel htmlFor='adornment-password'>Password</InputLabel>
                  <Input
                    id='adornment-password'
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='Toggle password visibility'
                          onClick={() => {
                            this.setState(state => ({
                              showPassword: !state.showPassword,
                            }));
                          }}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              )}
            />
            <Button type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withRouter(withFirebase(Signin));
