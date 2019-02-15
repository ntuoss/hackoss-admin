import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBar from 'layout/SideBar';
import Header from 'layout/Header';
import Footer from 'layout/Footer';

import NotFoundPage from 'containers/NotFound';
import { APP_ROUTE } from 'routes';
import { Wrapper, Main } from './style';

const Dashboard = () => (
  <Wrapper>
    {/* prettier-ignore */}
    <SideBar
      routes={APP_ROUTE}
      title="Iceberx"
    />
    <Main>
      <Header routes={APP_ROUTE} />
      <Switch>
        {APP_ROUTE.map(prop =>
          prop.redirect ? (
            <Redirect from={prop.path} to={prop.to} key={prop.path} />
          ) : (
            <Route {...prop} key={prop.path} />
          ),
        )}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Main>
  </Wrapper>
);

export default Dashboard;
