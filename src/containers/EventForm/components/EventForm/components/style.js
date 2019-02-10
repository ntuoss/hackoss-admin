import styled from 'styled-components';
import GridBase from 'components/GridComponent/Grid';
import GridContainerBase from 'components/GridComponent/GridContainer';
import CancelIconBase from '@material-ui/icons/Cancel';
import AddIconBase from '@material-ui/icons/Add';

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

export const IconGrid = styled(GridBase)`
  /* >>> */
  justify-content: center;
  width: auto;
`;

export const CancelIcon = styled(CancelIconBase)`
  /* >>> */
`;

export const AddIcon = styled(AddIconBase)`
  /* >>> */
`;
