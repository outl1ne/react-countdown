/* @flow */
import React from 'react'
import { requestInterval, isoStringToUnix, getTimeSegments } from './utils'

export type Props = {
  target: String, // ISO String
}

export default class BaseCountdown extends React.Component {
  props: Props

  constructor(props) {
    super(props)

    this.state = {
      isRunning: true,
      segments: getTimeSegments(this.getTimeLeft(isoStringToUnix(props.target))),
    }
  }

  tick = () => {
    const timeLeft = this.getTimeLeft(isoStringToUnix(this.props.target))

    if (timeLeft <= 0) {
      this.setState({
        segments: getTimeSegments(0),
        isRunning: false,
      })

      this.stopInterval && this.stopInterval()
    } else {
      this.setState({ segments: getTimeSegments(timeLeft), isRunning: true })
    }
  }

  componentDidMount() {
    this.tick()
    this.stopInterval = requestInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.stopInterval && this.stopInterval()
  }

  getTimeLeft(target) {
    const now = Math.round(new Date().getTime() / 1000)
    return target - now
  }

  render() {
    return this.props.children({ ...this.state })
  }
}
