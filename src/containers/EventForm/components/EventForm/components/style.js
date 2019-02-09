import styled from 'styled-components';
import GridBase from 'components/GridComponent/Grid';
import GridContainerBase from 'components/GridComponent/GridContainer';
import FormFieldBase from 'components/FormField';

export const FieldWrapper = styled(GridBase)`
  /* >>> */
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: stretch;
`;

export const Grid = styled(GridBase)`
  /* >>> */
  & > * {
    width: 100%;
  }
`;

export const GridContainer = styled(GridContainerBase)`
  /* >>> */
  margin: auto;
  width: 80%;
`;

export const FormField = styled(FormFieldBase)`
  /* >>> */
`;
