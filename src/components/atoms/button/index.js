import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Button extends Component {

  static propTypes = {
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node
    ])
  }

  static defaultProps = {
    className: '--primary',
    disabled: false,
    loading: false
  }

  // Handle click events
  handleClick = event => {
    const { disabled } = this.props

    if (disabled) {
      event.preventDefault()
      return
    }

    this.props.onClick()
  }

  render () {
    const { children, className, disabled, loading, onClick } = this.props

    const classes = classnames('a-button', {
      '--disabled': disabled,
      '--loading': loading
    }, className)

    return (
      <button
        className={ classes }
        disabled={ disabled }
        onClick={ onClick }>
        { children }
      </button>
    )
  }
}
