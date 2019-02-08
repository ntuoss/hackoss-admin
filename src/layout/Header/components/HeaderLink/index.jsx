import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Dashboard from '@material-ui/icons/Dashboard';

import { DASHBOARD } from 'routes';
import Notification from '../Notification';
import UserLink from '../UserLink';

import Wrapper from './style';

const HeaderLinks = () => (
  <Wrapper>
    <Notification />
    <Link to={DASHBOARD}>
      <IconButton>
        <Dashboard />
      </IconButton>
    </Link>
    <UserLink />
  </Wrapper>
);
export default HeaderLinks;
