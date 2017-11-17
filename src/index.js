import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'react-hot-loader/patch';
import 'babel-polyfill';

import store, { history } from '~store';

import App from '~components/app';

import registerSW from './registerSW';

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

const root = document.getElementById('root')
render(renderApp(), root)

registerSW();

if (module.hot) {
  module.hot.accept('~components/app', () => {
    require('~components/app')
    render(renderApp(), root)
  })
}
