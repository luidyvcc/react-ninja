'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (userName, type) {
    const internalUserName = userName ? `/${userName}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUserName}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    e.persist()
    if (keyCode === ENTER) {
      e.target.disable = true
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          e.target.disable = false
        })
    }
  }

  getRepos (type) {
    return () => {
      ajax().get(this.getGitHubApiUrl(this.state.userInfo.login, type)).then((result) => {
        this.setState({
          [type]: this.state.userInfo[type].length ? [] : result.map(item => ({ name: item.name, link: item.html_url }))
        })
      })
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
