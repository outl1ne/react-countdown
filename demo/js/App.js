/* @flow */
import React from 'react';
import { Countdown, BaseCountdown } from '../../src';
import theme from '../../src/theme.css';

export type Props = {};

export default class App extends React.Component {
  props: Props;

  constructor(props) {
    super(props);

    const date = new Date();
    date.setYear(date.getFullYear() + 1);

    this.state = {
      date,
    };
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href={theme} />

        <h1>Countdown</h1>
        <Countdown target={this.state.date.toISOString()} />

        <h1>BaseCountdown</h1>
        <BaseCountdown target={this.state.date.toISOString()}>
          {({ segments }) => (
            <div className="countdown">
              <span>{segments.days} days,&nbsp;</span>
              <span>{segments.hours} hours,&nbsp;</span>
              <span>{segments.minutes} minutes</span>
            </div>
          )}
        </BaseCountdown>
      </div>
    );
  }
}
