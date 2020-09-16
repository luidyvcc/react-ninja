'use strict'

import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import after3s from './after3s'

class Message extends Component {
  componentDidMount () {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }
  render () {
    return (
      <li style={{ background: this.context.store.color }}>
        {this.props.text}
        <button onClick={this.context.store.setColor(this.props.color, () => this.forceUpdate())}>Change Color</button>
      </li>
    )
  }
}

Message.contextTypes = {
  store: PropTypes.object
}

export default after3s(Message)
