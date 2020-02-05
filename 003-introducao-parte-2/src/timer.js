'use strict'
import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.timer
  }

  componentWillReceiveProps (nextProps) {
    console.log('TIMER: componentWillReceiveProps: ', this.props, nextProps)
  }

  componentDidMount () {
    console.log('TIMER: componentWillMount')
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('TIMER: shouldComponentUpdate: ', nextProps, nextState)
    return this.props.time !== nextProps.time
  }

  componentWillUnmount () {
    console.log('TIMER: componentWillUnmount')
    clearInterval(this.timer)
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('TIMER: componentWillUpdate: ', nextProps, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('TIMER: componentDidUpdate: ', prevProps, prevState)
  }

  render () {
    console.log('TIMER: render')
    return (<div>Timer: {this.state.time}</div>)
  }
}

export default Timer
