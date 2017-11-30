import React from 'react'
import { Link } from 'react-router-dom'

import Section from '~atoms/section'

import './index.scss'

export default () => (
  <article className="a-article a-page a-page--error">
    <Section>
      <div className="a-page-state">
        <div className="a-sad-face">:(</div>
        <h1>Something Went Horribly Wrong!</h1>
        <Link to="/">
          <span role="img" aria-label="Go Back Home">🏠</span>
        </Link>
      </div>
    </Section>
  </article>
)
