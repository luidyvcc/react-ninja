'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo }) => (
  <div className='app'>

    <Search />

    {!!userInfo && <UserInfo />}

    {!!userInfo && <Actions />}

    <Repos
      title='Repositórios'
      className='repos'
      repos={[
        { name: 'Nome do repositório', link: '#' },
        { name: 'Nome do repositório', link: '#' },
        { name: 'Nome do repositório', link: '#' }
      ]}
    />

    <Repos
      title='Favoritos'
      className='starred'
      repos={[
        { name: 'Nome do repositório', link: '#' },
        { name: 'Nome do repositório', link: '#' },
        { name: 'Nome do repositório', link: '#' }
      ]}
    />

  </div>
)

export default AppContent
