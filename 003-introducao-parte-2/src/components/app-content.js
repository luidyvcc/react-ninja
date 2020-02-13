'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch }) => (
  <div className='app'>

    <Search handleSearch={handleSearch} />

    {!!userInfo && <UserInfo userInfo={userInfo} />}

    {!!userInfo && <Actions />}

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
  handleSearch: React.PropTypes.func.isRequired
}

export default AppContent
