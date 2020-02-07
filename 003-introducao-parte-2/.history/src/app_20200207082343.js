'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false
    }
  }
  render () {
    return (
      <div>
       <input
        type='checkbox'
        checked={this.state.checked}
        onChange={e => {
          this.setState('checked', !this.state.checked)
        }}
      />
      </div>
    )
  }
}

export default App
