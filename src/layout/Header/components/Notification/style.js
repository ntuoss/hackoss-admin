import styled from 'styled-components';

import {
  MenuList as MenuListBase,
  MenuItem as MenuItemBase,
} from '@material-ui/core';

import { defaultFont, highlightButton } from 'styles/variables';

const MenuList = styled(MenuListBase)`
  position: relative;
  max-height: 20rem;
  overflow: auto;
`;
const MenuItem = styled(MenuItemBase)`
  && {
    ${defaultFont}
    font-size: 0.8rem;
    font-size: 13px;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 2px;
    transition: all 150ms linear;
    clear: both;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    &:hover {
      ${highlightButton}
    }
  }
`;

export { MenuList, MenuItem };
