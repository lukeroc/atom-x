import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const LINKS = [
  'about',
  'posts',
  'auth'
]

export default class Header extends Component {

  renderLinks () {
    return LINKS.map( (link, index) => {
      return (
        <Link
          key={ index }
          to={ `/${link}` }
          className="a-header__nav__link">
          { link }
        </Link>
      )
    })
  }

  render () {
    return (
      <header className="a-header">
        <div className="a-header__logo">
          <Link className="a-header__nav__link" to="/">ATOM-X</Link>
        </div>

        <nav className="a-header__nav">
          { this.renderLinks() }
        </nav>
      </header>
    )
  }
}
