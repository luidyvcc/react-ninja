'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Fernando'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => this.setState({text: 'Amanda'})}>
        {this.state.text}
      </div>
    )
  }
}

export default App
