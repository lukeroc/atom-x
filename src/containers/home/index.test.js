import React from 'react'
import ReactDOM from 'react-dom'
import HomeContainer from '.'

it('[container] HomeContainer renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HomeContainer />, div)
})
