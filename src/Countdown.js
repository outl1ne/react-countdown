/* @flow */
import React from 'react';
import BaseCountdown from './BaseCountdown';
import NumberBlock from './NumberBlock';
import Separator from './Separator';

export type Props = {
  target: String, // ISO String
  hideEmptyDays: boolean, // Don't show days block if countdown starts on 0 days left
  hideEmptyHours: boolean, // Don't show days block if countdown starts on 0 hours left
};

export default class Countdown extends React.Component {
  props: Props;

  static defaultProps = {
    hideEmptyDays: false,
    hideEmptyHours: false,
  };

  shouldHideEmptyDays = segments => {
    if (typeof this.__shouldHideEmptyDays !== 'boolean') {
      this.__shouldHideEmptyDays =
        this.props.hideEmptyDays && segments.days === 0;
    }

    return this.__shouldHideEmptyDays;
  };

  shouldHideEmptyHours = segments => {
    if (typeof this.__shouldHideEmptyHours !== 'boolean') {
      this.__shouldHideEmptyHours =
        this.props.hideEmptyHours &&
        segments.days === 0 &&
        segments.hours === 0;
    }

    return this.__shouldHideEmptyHours;
  };

  render() {
    return (
      <BaseCountdown {...this.props}>
        {({ segments }) => (
          <div className="countdown">
            {!this.shouldHideEmptyDays(segments) &&
              <React.Fragment>
                <NumberBlock value={segments.days} isLeading /><Separator />
              </React.Fragment>}
            {!this.shouldHideEmptyHours(segments) &&
              <React.Fragment>
                <NumberBlock
                  value={segments.hours}
                  isLeading={segments.days === 0}
                />
                <Separator />
              </React.Fragment>}
            <NumberBlock
              value={segments.minutes}
              isLeading={segments.hours === 0 && segments.days === 0}
            />
            <Separator />
            <NumberBlock
              value={segments.seconds}
              isLeading={
                segments.minutes === 0 &&
                  segments.hours === 0 &&
                  segments.days === 0
              }
            />
          </div>
        )}
      </BaseCountdown>
    );
  }
}
