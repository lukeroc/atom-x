import React from 'react'
import ReactDOM from 'react-dom'
import AuthFormContainer from '.'

it('[container] AuthFormContainer renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AuthFormContainer />, div)
})
