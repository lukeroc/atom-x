import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import store from '~store'

import validate from './validate'
import renderField from './render-field'

import './index.scss'

class AuthForm extends Component {

  onSubmit (values) {
    this.props.handleAuth()
    store.dispatch(push('/'))
  }

  render () {
    const { handleSubmit, submitting } = this.props

    return (
      <form className="a-auth-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
