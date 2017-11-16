import React from 'react';
import { Route, Link } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'

import './app.scss'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <article>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </article>
  </div>
)

export default App;
