'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'valor inicial',
      checked: false
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
            {/* Controlled Components */}
            <input type='checkbox'
              checked={this.state.checked}
              onChange={e => this.setState({ checked: !this.state.checked })} />
            checkbox
          </label>
          <label>
            {/* Uncontrolled Components */}
            <input type='checkbox' defaultChecked={false} />
            checkbox
          </label>

          <input type='radio' name='rd' value='1' /> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2
        </form>
      </div>
    )
  }
}

export default App
