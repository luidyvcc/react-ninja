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
        <form>
          {/* Controlled Components */}
          <input type='text' value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
          {/* Uncontrolled Components */}
          <input type='text' defaultValue='valor inicial 2' />

          <hr />

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

          <hr />

          <label> 
            {/* Uncontrolled Components */}           
            <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          </label>
          <label>
            {/* Uncontrolled Components */}
            <input type='radio' name='rd' value='2' /> Radio 2
          </label>

          <hr />

          {/* Controlled Components */}
          <select value={this.state.valueS} onChange={e => this.setState({ valueS: e.target.value })}>
            <option value='1'>Opção 1</option>
            <option value='2' selected>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>

          <hr />

          {/* Uncontrolled Components */}
          <textarea defaultValue='valor padrão'/>

        </form>
      </div>
    )
  }
}

export default App
