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
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log('event: ', e)
          }}
          onChange={e => {
            console.log('name: ', e.target.name)
            console.log('value: ', e.target.value)
          }}
        >

          <input type='text' name='name' />

          <input type='email' name='email' />

          <textarea name='textarea' defaultValue={'valor\npadrão'} />

          <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default App
