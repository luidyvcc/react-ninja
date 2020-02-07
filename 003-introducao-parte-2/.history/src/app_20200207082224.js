'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'valor inicial',
      valueS: 2,
      checked: false
    }
  }
  render () {
    return (
      <div>
       <input type='checkbox' checked={this.state.checked} />
      </div>
    )
  }
}

export default App
