'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render () {
    return (
      <div>

        <label>
          <input type='checkbox' checked={this.state.showContent} onChange={e => this.setState('showContent', !this.state.showContent)} />
          Mostrar conteúdo
        </label>

        {this.state.showContent && <div>Olha eu aqui!</div>}

      </div>
    )
  }
}

export default App
