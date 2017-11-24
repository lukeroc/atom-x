import React, { Component } from 'react'
import { Button } from '~components'

export default class Home extends Component {
  constructor ({ props }) {
    super(props)
  }

  render () {
    return (
      <article className="page-home">
        <h1>Home</h1>
        <p>Count: { this.props.count }</p>

        <p>
          <Button onClick={ this.props.increment } disabled={ this.props.isIncrementing }>Increment</Button>
          <Button onClick={ this.props.incrementAsync } disabled={ this.props.isIncrementing }>Increment Async</Button>
        </p>

        <p>
          <Button onClick={ this.props.decrement } disabled={ this.props.isDecrementing }>Decrementing</Button>
          <Button onClick={ this.props.decrementAsync } disabled={ this.props.isDecrementing }>Decrement Async</Button>
        </p>

        <p><Button onClick={ () => this.props.changePage() }>Go to about page via redux</Button></p>
      </article>
    )
  }
}
