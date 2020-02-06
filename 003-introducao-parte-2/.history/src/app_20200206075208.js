'use strict'
import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    // console.log('APP: render')
    return (
      <div>
        <form>
          <input type='text' value='valor inicial' onChange={(e) {
            this.setState({
              value: e.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}

export default App
