import React from 'react'
import ReactDOM from 'react-dom'
import HeaderContainer from '.'

it('[container] HeaderContainer renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeaderContainer />, div)
})
