// https://stackoverflow.com/a/29972322
export function requestInterval(fn: Function, interval: number) {
  let timeoutId = 0
  let expected = Date.now() + interval
  let running = true
  function stop() {
    running = false
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(step, interval)

  function step() {
    const dt = Date.now() - expected // the drift (positive for overshooting)
    if (dt > interval) {
      // something really bad happened. Maybe the browser (tab) was inactive?
      // possibly special handling to avoid futile "catch up" run
    }
    fn()

    expected += interval

    if (running) {
      timeoutId = setTimeout(step, Math.max(0, interval - dt)) // take into account drift
    }
  }

  return stop
}

export function isoStringToUnix(isoString: String): number {
  const output = Math.round(new Date(isoString).getTime() / 1000)

  if (isoString == null || isNaN(output)) {
    return NaN
  }

  return output
}

export function getTimeSegments(
  seconds: number
): {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
} {
  if (isNaN(seconds)) {
    return {
      days: null,
      hours: null,
      minutes: null,
      secnods: null,
    }
  }

  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor(((seconds % 86400) % 3600) / 60),
    seconds: ((seconds % 86400) % 3600) % 60,
  }
}
