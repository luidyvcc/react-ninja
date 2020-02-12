'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        userName: 'Fernando Daciuk',
        repos: 12,
        followers: 10,
        following: 2
      },
      repos: [{name: 'Repo', link: '#'}],
      starred: [{ name: 'Star', link: '#' }]
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
