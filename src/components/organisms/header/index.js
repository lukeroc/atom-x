import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default class Header extends Component {
  renderPostsButton (auth) {
    return auth ? (
      <Link to="/posts" className="a-header__nav__link">Posts</Link>
    ) : null
  }

  renderAuthButtons (auth, handleAuth) {
    return auth
      ? (<a onClick={ handleAuth } className="a-header__nav__link">Logout</a>)
      : (<Link className="a-header__nav__link" to="/auth">Login</Link>)
  }

  render () {
    const {
      isAuthenticated,
      handleAuth
    } = this.props

    return (
      <header className="a-header">
        <div className="a-header__logo">
          <Link className="a-header__nav__link" to="/">ATOM-X</Link>
        </div>

        <nav className="a-header__nav">
          <Link className="a-header__nav__link" to="about">About</Link>

          { this.renderPostsButton(isAuthenticated) }

          { this.renderAuthButtons(isAuthenticated, handleAuth) }
        </nav>
      </header>
    )
  }
}
