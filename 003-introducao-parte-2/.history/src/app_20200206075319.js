'use strict'
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <form>
          <input type='text' value='valor inicial' 
            onChange={e => this.setState({value: e.target.value})} />
        </form>
      </div>
    )
  }
}

export default App
