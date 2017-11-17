import React from 'react';

import Routes from '~routes';

import NavLink from '../atoms/nav-link';

import './app.scss'

const App = () => (
  <div>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/not-found">Not Found</NavLink>
    </header>

    <article>
      <Routes />
    </article>
  </div>
)

export default App;
