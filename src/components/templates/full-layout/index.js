import React, { Component } from 'react'
import classnames from 'classnames'

import './index.scss'

export default class FullLayout extends Component {

  render () {
    const { children, classNames } = this.props

    const classes = classnames(
      'a-layout--full',
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
