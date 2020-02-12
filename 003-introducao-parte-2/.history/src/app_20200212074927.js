'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: 0
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
      />
    )
  }
}

export default App
