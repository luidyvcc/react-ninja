'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred }) => (
  <div className='app'>

    <Search />

    {!!userInfo && <UserInfo />}

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
}

export default AppContent
