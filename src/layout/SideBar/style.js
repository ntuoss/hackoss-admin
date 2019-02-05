/* eslint-disable */

import styled, { css } from 'styled-components';
import { NavLink as NavLinkBase } from 'react-router-dom';

import {
  Drawer as DrawerBase,
  List as ListBase,
  ListItem as ListItemBase,
  ListItemIcon as ListItemIconBase,
  ListItemText as ListItemTextBase,
} from '@material-ui/core';

import {
  drawerWidth,
  defaultFont,
  boxShadow,
  primaryBoxShadow,
} from 'styles/variables';

const Drawer = styled(DrawerBase).attrs({
  classes: {
    paper: 'paper',
  },
})`
  & > .paper {
    ${boxShadow}
    border: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${drawerWidth + 'px'};
    height: 100%;
    z-index: 1;
    background: linear-gradient(rgba(23, 23, 23, 0.7), rgba(23, 23, 23, 0.3)),
      url(${props =>
        props.img ||
        'https://i.pinimg.com/564x/ba/94/49/ba944995a77457acd69cb888c0e88bde.jpg'});
    background-size: cover;
  }
`;

const SideBarHeader = styled.div`
  ${defaultFont}
  position: relative;
  padding: 15px;
  z-index: 1;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.secondaryColor};
  & img {
    padding-right: 1.5rem;
  }
  font-size: 2rem;
`;

const List = styled(ListBase)`
  margin-top: 20px;
  list-style: none;
  position: unset;
`;

const highlight = css`
  background: ${props => props.theme.highlightColor};
  box-shadow: 0 10px 20px -5px ${props => props.theme.highlightColor};
`;

const NavLink = styled(NavLinkBase)`
  ${props =>
    props.location.pathname === props.to ? highlight : 'transparent'};
  &:hover {
    background: ${props => props.theme.highlightColor};
  }
`;

const ListItem = styled(ListItemBase)`
  && {
    ${defaultFont}
    position: relative;
    transition: 0.7;
    margin: 10px 15px;
    width: auto;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0 0 0 0 'transparent';
    &,
    &:hover,
    &:focus,
    &:visited {
      color: ${props => props.theme.secondaryColor};
      background: inherit;
      box-shadow: inherit;
    }
  }
`;

const ListItemIcon = styled(ListItemIconBase)`
  & > svg {
    width: 24px;
    height: 30px;
    font-size: 1rem;
    line-height: 1rem;
    float: left;
    text-align: center;
    vertical-align: middle;
    color: ${props => props.theme.secondaryColor};
  }
`;

const ListItemText = styled(ListItemTextBase)`
  & > span {
    ${defaultFont}
    font-size: 1rem;
    line-height: 1rem;
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
  }
`;

export {
  Drawer,
  SideBarHeader,
  List,
  NavLink,
  ListItem,
  ListItemIcon,
  ListItemText,
};
