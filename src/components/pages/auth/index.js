import React, { Component } from 'react'

import AuthLayout from '~templates/auth'
import AuthForm from '~containers/auth-form'

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
