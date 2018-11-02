import { render, cleanup } from 'react-testing-library';
import Countdown from '../src/Countdown';
import React from 'react';

afterEach(cleanup);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('Countdown', () => {
  it('should correctly count down to a year from now', () => {
    const date = new Date();
    date.setYear(date.getFullYear() + 1);
    const { container } = render(<Countdown target={date.toISOString()} />);
    expect(container.textContent).toBe('365:00:00:00');
  });

  it('should automatically count down after a second', async () => {
    const date = new Date();
    date.setYear(date.getFullYear() + 1);
    const { container } = render(<Countdown target={date.toISOString()} />);
    expect(container.textContent).toBe('365:00:00:00');
    await sleep(1000);
    expect(container.textContent).toBe('364:23:59:59');
  });
});
