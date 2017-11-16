import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '~utils/async-component';

const AsyncHome = asyncComponent(() => import('~components/pages/home'));
const AsyncAbout = asyncComponent(() => import('~components/pages/about'));
const AsyncFourOhFour = asyncComponent(() => import('~components/pages/error'));

export default ({ childProps }) =>
  <Switch>
    <Route
      path='/'
      exact
      component={AsyncHome}
      props={childProps}
    />

    <Route
      path='/about'
      exact
      component={AsyncAbout}
      props={childProps}
    />

    {/* catch all unmatched routes */}
    <Route component={AsyncFourOhFour} />
  </Switch>
;
