import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import createHistory from 'history/createBrowserHistory'

import Reducers from './reducers'

const enhancers = []
const history = createHistory()
const initialState = {}
const middleware = [
  thunk,
  ReduxPromise,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  Reducers,
  initialState,
  composedEnhancers
)

export { history }
export default store
