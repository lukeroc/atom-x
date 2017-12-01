import React from 'react'
import ReactDOM from 'react-dom'
import Loader from '.'

it('[atom] Loader renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loader />, div)
})
