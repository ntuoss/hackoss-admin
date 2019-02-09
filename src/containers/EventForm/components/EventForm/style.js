import styled from 'styled-components';
import TextFieldBase from '@material-ui/core/TextField';
import GridBase from 'components/GridComponent/Grid';
import GridContainerBase from 'components/GridComponent/GridContainer';
import StepperBase from '@material-ui/core/Stepper';
import ButtonBase from '@material-ui/core/Button';

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;
export const Stepper = styled(StepperBase)`
  && {
    background: transparent;
  }
`;
export const FieldWrapper = styled.div`
  /* >>> */
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: stretch;
`;

export const ButtonWrapper = styled.div`
  /* >>> */
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: flex-end;
`;
export const Grid = styled(GridBase)`
  /* >>> */
`;

export const GridContainer = styled(GridContainerBase)`
  /* >>> */
`;

export const TextField = styled(TextFieldBase)`
  /* >>> */
`;

export const Button = styled(ButtonBase).attrs({
  variant: 'outlined',
})`
  && {
    margin: 1rem;
  }
`;
