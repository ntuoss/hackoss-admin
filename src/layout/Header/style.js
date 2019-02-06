import styled from 'styled-components';

import {
  AppBar as AppBarBase,
  Toolbar as ToolbarBase,
} from '@material-ui/core';

import { container, defaultFont } from 'styles/variables';

const AppBar = styled(AppBarBase)`
  && {
    background: transparent;
    position: relative;
    margin: 0;
    width: 100%;
    box-shadow: none;
    padding: 10px 0;
    color: ${props => props.theme.primaryColor};
    border: 0;
    transition: all 150ms ease 0s;
    min-height: 50px;
    display: block;
  }
`;

const Toolbar = styled(ToolbarBase)`
  ${container}
  height: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  ${defaultFont}
  font-size: 1rem;
  user-select: none;
  cursor: inherit;
`;

export { AppBar, Toolbar, Title };
