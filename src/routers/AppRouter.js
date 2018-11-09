import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Router } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import DashboardPage from '../components/DashboardPage';
import InputDataPage from '../components/InputDataPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRouter';
import LoginPage from '../components/LoginPage';
import history from "./asgard-history";
import DataModificationPage from '../components/DataModificationPage';
import CreateAccount from "../components/CreateAccount";

const AppRouter = () => (
  <Router history={history}>
    <div>

      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/input" component={InputDataPage} />
        <Route path="/login" component={LoginPage} />
        <PublicRoute path="/data" component={DataModificationPage} />
        <Route component={NotFoundPage} />
        <PublicRoute path="/create-account" component={CreateAccount} />
      </Switch>

    </div>
  </Router>
);

export default AppRouter;
