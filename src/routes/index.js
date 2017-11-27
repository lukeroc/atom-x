import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loader from '~components/atoms/loader'

// Set Loadable defaults
const defaults = {
  delay: 300,
  loading: Loader,
  timeout: 10000
}

const AsyncHome = Loadable({
  loader: () => import('~containers/home'),
  ...defaults
})

const AsyncAbout = Loadable({
  loader: () => import('~components/pages/about'),
  ...defaults
})

const AsyncFourOhFour = Loadable({
  loader: () => import('~components/pages/error'),
  ...defaults
})

// Export Routes
export default ({ childProps }) =>
  <Switch>
    <Route
      path='/'
      exact
      component={ AsyncHome }
      props={ childProps }
    />

    <Route
      path='/about'
      exact
      component={ AsyncAbout }
      props={ childProps }
    />

    {/* Catch all unmatched routes */}
    <Route component={ AsyncFourOhFour } />
  </Switch>
;
