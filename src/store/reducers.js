import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import counter from './counter/reducer'
import authentication from './authentication/reducer'

export default combineReducers({
  authentication,
  counter,
  form: formReducer,
  routing: routerReducer
})
