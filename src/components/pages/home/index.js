import React, { Component } from 'react'

export default class Home extends Component {
  constructor ({ props }) {
    super(props)
  }

  render () {
    return (
      <article className="page-home">
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
        </p>

        <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p>
      </article>
    )
  }
}
