import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '.'

it('[page] Posts renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Posts />, div)
})
