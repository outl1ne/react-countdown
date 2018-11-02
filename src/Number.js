import React from 'react'

export default class Number extends React.PureComponent {
  render() {
    const { value, ...rest } = this.props
    return (
      <span className="countdown-number" {...rest}>
        {value}
      </span>
    )
  }
}
