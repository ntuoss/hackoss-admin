import styled from 'styled-components';
import { drawerWidth } from 'styles/variables';

const Wrapper = styled.div`
  position: relative;
  top: 0;
  height: 100vh;
  overflow: scroll;
`;

const Main = styled.main`
  position: relative;
  width: calc(100% - ${drawerWidth}px);
  float: right;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export { Wrapper, Main };
