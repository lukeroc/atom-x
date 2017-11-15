import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './modules/configure'
import App from './components/app'

import registerServiceWorker from './registerServiceWorker';

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

const root = document.getElementById('root')
render(renderApp(), root)

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/app', () => {
    require('./components/app')
    render(renderApp(), root)
  })
}
