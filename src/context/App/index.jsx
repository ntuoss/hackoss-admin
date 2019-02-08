import React from 'react';
import StyledTheme from 'styles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteHandler from 'components/RouteHandler';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AUTH_ROUTE } from 'routes';
import { FirebaseApp, FirebaseContext } from 'utils/firebase';

const App = () => (
  <StyledTheme>
    <CssBaseline />
    <FirebaseContext.Provider value={new FirebaseApp()}>
      <Router>
        <Switch>
          {AUTH_ROUTE.map(prop => (
            <RouteHandler {...prop} key={prop.path} />
          ))}
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  </StyledTheme>
);

export default App;
