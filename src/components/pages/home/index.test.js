import React from 'react'
import ReactDOM from 'react-dom'
import Home from '.'

it('[page] Home renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})
