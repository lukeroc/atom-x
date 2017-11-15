import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import reducer from '.'

const configureStore = (initialState, services = {}) => {

  const enhancers = [
    applyMiddleware(ReduxPromise)
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))

  if (module.hot) {
    module.hot.accept('.', () => {
      const nextReducer = require('.').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
