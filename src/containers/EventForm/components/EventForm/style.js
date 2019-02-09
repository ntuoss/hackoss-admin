import styled from 'styled-components';
import TextFieldBase from '@material-ui/core/TextField';
import GridBase from 'components/GridComponent/Grid';
import GridContainerBase from 'components/GridComponent/GridContainer';

export const ChipsContainer = styled.div`
  /* >>> */
`;
export const Grid = styled(GridBase)`
  /* >>> */
  & > * {
    width: 100%;
  }
`;

export const GridContainer = styled(GridContainerBase)`
  /* >>> */
`;

export const TextField = styled(TextFieldBase)`
  /* >>> */
`;
