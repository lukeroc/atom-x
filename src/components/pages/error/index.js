import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default () => (
  <article className="a-article a-page a-page__error">
    <section className="a-section">
      <div className="a-page-state">
        <div className="a-sad-face">:(</div>
        <h1>Something Went Horribly Wrong!</h1>
        <Link to="/">🏠</Link>
      </div>
    </section>
  </article>
)
