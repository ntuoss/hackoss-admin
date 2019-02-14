import styled from 'styled-components';

import PageBase from 'components/Page';
import GridBase from 'components/GridComponent/Grid';
import GridContainerBase from 'components/GridComponent/GridContainer';
import TabsBase from '@material-ui/core/Tabs';
import TabBase from '@material-ui/core/Tab';

export const Page = styled(PageBase)`
  margin: 3rem;
  padding: 1rem;
  width: auto;
`;
export const GridContainer = styled(GridContainerBase)`
  /* >>> */
  display: flex;
  justify-content: flex-start;
  box-shadow: 3px 0 10px #0006;
`;

export const Grid = styled(GridBase)`
  /* >>> */
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;
export const Tabs = styled(TabsBase)`
  && {
    background: #fff;
  }
`;
export const Tab = styled(TabBase)`
  /* >>> */
`;

export const HeaderWrapper = styled.div`
  width: 100%;
`;
