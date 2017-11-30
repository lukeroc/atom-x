import React, { Component } from 'react'

import Layout from '~templates/layout'

import Button from '~atoms/button'

import './index.scss'

export default class Home extends Component {
  render () {

    const {
      changePage,
      count,
      decrement,
      decrementAsync,
      increment,
      incrementAsync,
      isDecrementing,
      isIncrementing
    } = this.props

    return (
      <Layout>
        <article className="a-article a-page a-page__home">
          <section className="a-section">
            <h1>Home</h1>
            <p>Count: { count }</p>

            <br />

            <p>
              <Button onClick={ increment } disabled={ isIncrementing }>Increment</Button>
              <Button onClick={ incrementAsync } disabled={ isIncrementing }>Increment Async</Button>
            </p>

            <p>
              <Button onClick={ decrement } disabled={ isDecrementing }>Decrementing</Button>
              <Button onClick={ decrementAsync } disabled={ isDecrementing }>Decrement Async</Button>
            </p>

            <p><Button onClick={ () => changePage() }>Go to error page via redux</Button></p>
          </section>
        </article>
      </Layout>
    )
  }
}
