import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Router } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import DashboardPage from '../components/DashboardPage';
import InputDataPage from '../components/InputDataPage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import ServicesPage from '../components/ServicesPage';

import PublicRoute from './PublicRouter';
import LoginPage from '../components/LoginPage';
import GetStartedPage from '../components/GetStartedPage';
import ProductsPage from '../components/ProductsPage';
import FormsPage from '../components/FormsPage';
import history from "./asgard-history";

import DataModificationPage from '../components/DataModificationPage';
const AppRouter = () => (
  <Router history={history}>
    <div>

      <Switch>

        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/input" component={InputDataPage} />
        <Route path="/login" component={LoginPage} />
        <PublicRoute path="/about" component={AboutPage} />
        <PublicRoute path="/products" component={ProductsPage} />
        <PublicRoute path="/forms" component={FormsPage} />
        <PublicRoute path="/start" component={GetStartedPage} />
        <PublicRoute path="/contact" component={ContactPage} />
        <PublicRoute path="/FAQ" component={FAQPage} />
        <PublicRoute path="/data" component={DataModificationPage} />
        <Route path="/services" component={ServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </Router>
);

export default AppRouter;
