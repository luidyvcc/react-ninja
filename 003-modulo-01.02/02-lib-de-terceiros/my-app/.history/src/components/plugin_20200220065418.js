import React, { Component } from 'react'

class Plugin extends Component {
  constructior () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {

  }

  render () {
    return (
      <div>
        <input type='text' />
        <button pnClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin