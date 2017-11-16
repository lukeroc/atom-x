const NAMESPACE = 'COUNTER';

export const INCREMENT_REQUESTED = `${NAMESPACE}/INCREMENT_REQUESTED`;
export const INCREMENT = `${NAMESPACE}/INCREMENT`;
export const DECREMENT_REQUESTED = `${NAMESPACE}/DECREMENT_REQUESTED`;
export const DECREMENT = `${NAMESPACE}/DECREMENT`;

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}
  
export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 2000)
  }
}
  
export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 2000)
  }
}