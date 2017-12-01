import React from 'react'
import ReactDOM from 'react-dom'
import Section from '.'

it('[atom] Section renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Section />, div)
})
