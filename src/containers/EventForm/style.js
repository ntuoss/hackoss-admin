import styled from 'styled-components';

import PageBase from 'components/Page';
import GridBase from 'components/GridComponent/Grid';
import GridContainerBase from 'components/GridComponent/GridContainer';
import TabsBase from '@material-ui/core/Tabs';
import TabBase from '@material-ui/core/Tab';

const Page = styled(PageBase)`
  margin: 0 3rem;
  padding: 1rem;
  width: auto;
  justify-content: flex-start;
`;
const GridContainer = styled(GridContainerBase)`
  /* >>> */
  display: flex;
  justify-content: flex-start;
`;

const Grid = styled(GridBase)`
  /* >>> */
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;
const Tabs = styled(TabsBase)`
  && {
    background: #fff;
  }
`;
const Tab = styled(TabBase)`
  /* >>> */
`;

export { Page, Grid, GridContainer, Tabs, Tab };
