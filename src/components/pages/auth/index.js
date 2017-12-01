import React, { Component } from 'react'

import FullLayout from '~templates/full-layout'
import AuthForm from '~containers/auth-form'

export default class Auth extends Component {
  render () {
    return (
      <FullLayout>
        <article className="a-article a-page a-page--auth">

          {/* Using an auth page so that multiple (register, login,
          reset, forgot password) forms renering logic can be
          handled here*/}

          <AuthForm />
        </article>
      </FullLayout>
    )
  }
}
