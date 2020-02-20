import React, { Component } from 'react'

class Plugin extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('clicou')
  }

  render () {
    return (
      <div>
        <input type='text' />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin