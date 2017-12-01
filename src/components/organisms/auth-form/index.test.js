import React from 'react'
import ReactDOM from 'react-dom'
import AuthForm from '.'

it('[organism] AuthForm renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AuthForm />, div)
})
