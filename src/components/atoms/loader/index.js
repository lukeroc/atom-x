import React, { Component } from 'react'

export default class Loader extends Component {
  render () {
    const { error, timedOut, pastDelay } = this.props

    if (error) {
      return <div>Something went horribly wrong.</div>;
    }

    if (timedOut) {
      return <div>This is taking too long...</div>;
    }

    if (pastDelay) {
      return <div>Loading...</div>;
    }

    return null
  }
}
