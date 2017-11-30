import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { handleAuth } from '~store/authentication/actions'

import Header from '~organisms/header'

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated
})

const mapDispatchToProps = dispatch => bindActionCreators({ handleAuth }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
