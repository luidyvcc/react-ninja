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
          <input type='text' value={this.state.value}
            onChange={e => this.setState({value: e.target.value})} />
          <input type='text' defaultValue='valor inicial 2' />
        </form>
      </div>
    )
  }
}

export default App
