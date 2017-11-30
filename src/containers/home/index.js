import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Home from '~components/pages/home'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '~store/counter/actions'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/broken-path')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
