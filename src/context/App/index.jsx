import React from 'react';
import StyledTheme from 'styles';
import Dashboard from 'layout/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <StyledTheme>
    <CssBaseline />
    <Dashboard />
  </StyledTheme>
);

export default App;
