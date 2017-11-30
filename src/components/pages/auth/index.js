import React, { Component } from 'react'

import AuthForm from '~organisms/auth-form'
import AuthLayout from '~templates/auth'

export default class Auth extends Component {
  render () {
    return (
      <AuthLayout>
        <article className="a-article a-page a-page--auth">
          <AuthForm />
        </article>
      </AuthLayout>
    )
  }
}
