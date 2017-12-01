import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ROUTES } from './routes.const'

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

export default ({ childProps }) => {
  return (
    <Switch>
      { renderRoutes(childProps) }
    </Switch>
  )
}
