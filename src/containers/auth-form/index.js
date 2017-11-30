import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { handleAuth } from '~store/authentication/actions'

import AuthForm from '~organisms/auth-form'

const AuthFormContainer = props => <AuthForm {...props} />

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated
})

const mapDispatchToProps = dispatch => bindActionCreators({ handleAuth }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthFormContainer)
