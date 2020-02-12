'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos }) => (
  <div className='app'>

    <Search />

    {!!userInfo && <UserInfo />}

    {!!userInfo && <Actions />}

    {!!repos.lenght && <Repos
      title='Repositórios'
      className='repos'
      repos={repos} />
    }

    {!!repos.lenght && <Repos
      title='Favoritos'
      className='starred'
      repos={repos} />
    }

  </div>
)

export default AppContent
