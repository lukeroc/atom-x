import React, { Component } from 'react'
import classnames from 'classnames'

import Header from '~organisms/header'

import './index.scss'

export default class Layout extends Component {

  render () {
    const { children, className } = this.props

    const classes = classnames(
      'a-layout',
      {},
      className
    )

    return (
      <main className={ classes }>
        <Header />
        { children }
      </main>
    )
  }
}
