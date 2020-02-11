'use strict'

import React from 'react'

import Search from './components/search'
import UserInfo from './components/user-info'

const App = () => (
  <div className='app'>

    <Search />

    <UserInfo />

    <div className='actions'>
      <button>Ver repositórios</button>
      <button>Ver favoritos</button>
    </div>

    <div className='repos'>
      <h2>Repositórios</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>

    <div className='starred'>
      <h2>Favoritos</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>

  </div>
)

export default App
