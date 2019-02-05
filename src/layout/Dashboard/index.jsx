import React from 'react';

import dashboardRoutes from 'routes';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SideBar from 'layout/SideBar';

import { Wrapper, Main } from './style';

const Dashboard = () => (
  <BrowserRouter>
    <Wrapper>
      {/* prettier-ignore */}
      <SideBar
        routes={dashboardRoutes}
        title="Outfox"
      />
      <Main>
        <Switch>
          {dashboardRoutes.map(prop =>
            prop.redirect ? (
              <Redirect from={prop.path} to={prop.to} key={prop.path} />
            ) : (
              <Route {...prop} key={prop.path} />
            ),
          )}
        </Switch>
      </Main>
    </Wrapper>
  </BrowserRouter>
);

export default Dashboard;
