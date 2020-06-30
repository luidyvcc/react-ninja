'use strict'

import React, { PureComponent } from 'react'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  async componentDidMount () {
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
  }

  render () {
    const { counter } = this.state
    console.log('Counter: ', counter);

    return (
      <div>counter: {counter}</div>
    )
  }
}

export default App
