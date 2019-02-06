import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/Person';
import Dashboard from '@material-ui/icons/Dashboard';

import { DASHBOARD, USER } from 'routes';
import Notification from '../Notification';

import Wrapper from './style';

const HeaderLinks = () => (
  <Wrapper>
    <Notification />
    <Link to={DASHBOARD}>
      <IconButton>
        <Dashboard />
      </IconButton>
    </Link>
    <Link to={USER}>
      <IconButton>
        <Person />
      </IconButton>
    </Link>
  </Wrapper>
);
export default HeaderLinks;
