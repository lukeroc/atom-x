import React, { Component } from 'react'

import './index.scss'

export default class Section extends Component {
  render () {
    const { children } = this.props

    return (
      <section className="a-section">
        { children }
      </section>
    )
  }
}
