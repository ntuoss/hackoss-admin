import styled from 'styled-components';
import { drawerWidth } from 'styles/variables';

const Wrapper = styled.div`
  position: 'relative';
  top: '0';
  height: '100vh';
`;

const Main = styled.main`
  width: calc(100% - ${drawerWidth}px);
  position: relative;
  float: right;
  max-height: 100%;
`;

export { Wrapper, Main };
