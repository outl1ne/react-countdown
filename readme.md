# React countdown

This is a React countdown timer. You can find a full usage example [here](https://github.com/optimistdigital/react-countdown/blob/master/demo/js/App.js).

## Usage

`npm install @optimistdigital/react-countdown`

There's two variations:

## BaseCountdown

Uses render props to pass you the data, so you can render your own markup:

```js
import { BaseCountdown } from '@optimistdigital/react-countdown';

function Demo() {
  return (
    <BaseCountdown target="2019-11-02T15:33:31.044Z">
      {({ segments, isRunning }) => (
        <div>
          <span>{segments.days} days,&nbsp;</span>
          <span>{segments.hours} hours,&nbsp;</span>
          <span>{segments.minutes} minutes</span>
        </div>
      )}
    </BaseCountdown>
  );
}
```

Props:

- `target` (string) - ISO timestamp that the countdown will count towards.

## Countdown

This is a simple premade countdown that works without much configuration. Counts down to zero and then stops.

```js
import { Countdown } from '@optimistdigital/react-countdown';

function Demo() {
  return <Countdown target="2019-11-02T15:33:31.044Z" />;
}
```

Props:

- `target` (string) - ISO timestamp that the countdown will count towards.
- `hideEmptyDays` and `hideEmptyHours` (boolean) - if true, then day/hour segments will only be shown if they start with a non-zero value on first render.
