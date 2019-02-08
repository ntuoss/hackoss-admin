import styled from 'styled-components';
import { Form as FormBase } from 'formik';
import { FormControl as FormControlBase } from '@material-ui/core';
import Page from 'components/Page';

const Form = styled(FormBase)`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 20rem;
`;
const FormControl = styled(FormControlBase)`
  && {
    margin-bottom: 1rem;
  }
`;

export { Page, Form, FormControl };
