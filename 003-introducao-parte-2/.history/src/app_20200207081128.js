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
        <form onSubmit={e => console.log('event: ', e)}>
          
          <textarea defaultValue={'valor\npadrão'} />

          <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default App
