'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'valor inicial'
    }
  }
  render () {
    return (
      <div>
        <form>
          {/* Controlled Components */}
          <input type='text' value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
          {/* Uncontrolled Components */}
          <input type='text' defaultValue='valor inicial 2' />

          <label>
            <input type='checkbox' />
            checkbox
          </label>
        </form>
      </div>
    )
  }
}

export default App