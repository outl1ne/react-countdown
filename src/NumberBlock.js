import React from 'react';
import Number from './Number';

export type Props = {
  value: ?Number,
  isLeading: boolean, // If true, then 0-digits in here are leading zeroes
};

export default class NumberBlock extends React.PureComponent {
  props: Props;

  render() {
    const { value, isLeading, ...rest } = this.props;

    const numbers = typeof value === 'number'
      ? value.toString().padStart(2, '0')
      : '--';

    return (
      <div className="countdown-number-block" {...rest}>
        {numbers
          .split('')
          .map((number, index) => (
            <Number key={index} className="countdown-number" value={number} />
          ))}
      </div>
    );
  }
}
