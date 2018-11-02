import React from 'react'

export default class Separator extends React.PureComponent {
  render() {
    const { value, ...rest } = this.props
    return (
      <span className="countdown-separator" {...rest}>
        :
      </span>
    )
  }
}
