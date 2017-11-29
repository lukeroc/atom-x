import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ROUTES } from './routes.const'

// Iterate through and render all routes
const renderRoutes = childProps => {
  return ROUTES.map( (route, index) => {
    return (
      <Route
        key={ index }
        path={ route.path }
        component={ route.component }
        props={ childProps }
        exact={ route.exact }
      />
    )
  })
}

// Export Routes
export default ({ childProps }) => {
  return (
    <Switch>
      { renderRoutes(childProps) }
    </Switch>
  )
}
