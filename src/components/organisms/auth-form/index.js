import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import renderField from './render-field'
import onSubmit from './on-submit'

class AuthForm extends Component {

  render () {

    const { handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="username" type="text" component={ renderField } label="Username"/>
        <Field name="password" type="password" component={ renderField } label="Password"/>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'authenticationForm',
  validate
})(AuthForm)
