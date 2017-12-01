import React from 'react'
import ReactDOM from 'react-dom'
import DefaultLayout from '.'

it('[template] DefaultLayout renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DefaultLayout />, div)
})
