import React, { Component } from 'react'
import classnames from 'classnames'

import './index.scss'

export default class AuthLayout extends Component {

  render () {
    const { children, classNames } = this.props

    const classes = classnames(
      'a-layout--auth',
      {},
      classNames
    )

    return (
      <main className={ classes }>
        { children }
      </main>
    )
  }
}
