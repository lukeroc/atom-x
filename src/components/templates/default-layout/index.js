import React, { Component } from 'react'
import classnames from 'classnames'

import Header from '~containers/header'

import './index.scss'

export default class DefaultLayout extends Component {

  render () {
    const { children, classNames } = this.props

    const classes = classnames(
      'a-layout',
      {},
      classNames
    )

    return (
      <main className={ classes }>
        <Header />
        { children }
      </main>
    )
  }
}
