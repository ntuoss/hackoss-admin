import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const RouterHandler = ({ auth, ...props }) =>
  auth ? <PrivateRoute {...props} /> : <Route {...props} />;

RouterHandler.defaultProps = {
  auth: false,
};
RouterHandler.propTypes = {
  auth: PropTypes.bool,
};

export default RouterHandler;
