import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Routes from '~routes'

import './app.scss'

export default class App extends Component {
  render () {
    return (
      <section id="app">
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/not-found">Not Found</Link>
        </header>

        <main>
          <Routes />
        </main>
      </section>
    )
  }
}
