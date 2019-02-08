import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const GridItem = styled(Grid).attrs({
  item: true,
})`
  padding: 0 15px;
`;

export default GridItem;
