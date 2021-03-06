'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className='app'>

    <Search isFetching={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}

    {!!userInfo && <UserInfo userInfo={userInfo} />}

    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repos
      title='Repositórios'
      className='repos'
      repos={repos} />
    }

    {!!starred.length && <Repos
      title='Favoritos'
      className='starred'
      repos={starred} />
    }

  </div>
)

AppContent.propTypes = {
  userInfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default AppContent
