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
        <label>
          <input type='checkbox' checked={this.state.checked} onChange={e => this.setState('checked', !this.state.checked)} />
          Mostrar conteúdo
        </label>
      </div>
    )
  }
}

export default App
