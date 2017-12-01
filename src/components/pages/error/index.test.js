import React from 'react'
import ReactDOM from 'react-dom'
import Error from '.'

it('[page] Error renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Error />, div)
})
