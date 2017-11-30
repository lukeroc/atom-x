import { HANDLE_AUTH } from './actions'

const initialState = {
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      }

    default:
      return state
  }
}
