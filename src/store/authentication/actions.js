const NAMESPACE = 'AUTH'

export const HANDLE_AUTH = `${NAMESPACE}/HANDLE_AUTH`

export const handleAuth = () => {
  return (dispatch, getState) => {
    const { isAuthenticated } = getState().authentication

    dispatch({
      type: HANDLE_AUTH,
      payload: !isAuthenticated
    })
  }
}



