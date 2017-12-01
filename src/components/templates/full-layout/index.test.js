import React from 'react'
import ReactDOM from 'react-dom'
import FullLayout from '.'

it('[template] FullLayout renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FullLayout />, div)
})
