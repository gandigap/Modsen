import React from 'react'
import PropTypes from 'prop-types'
import { ERROR_MESSAGE } from '@/constants'

import {
  StyledErrorDetails,
  StyledErrorTitle,
} from './style'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    const children = this.props.children
    if (this.state.errorInfo) {
      return (
        <div>
          <StyledErrorTitle>
            {ERROR_MESSAGE}
          </StyledErrorTitle>
          <StyledErrorDetails>
            {this.state.error &&
              this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </StyledErrorDetails>
        </div>
      )
    }
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ErrorBoundary
