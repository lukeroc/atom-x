import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default class Header extends Component {
  renderPostsButton (auth) {
    return auth ? (
      <Link to="/posts" className="a-header__nav__link">Posts</Link>
    ) : null
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

          <a onClick={ handleAuth } className="a-header__nav__link">
            { isAuthenticated ? 'Logout' : 'Login' }
          </a>
        </nav>
      </header>
    )
  }
}
