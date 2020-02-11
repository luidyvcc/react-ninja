'use strict'

import React from 'react'

const App = () => (
  <div className='app'>

    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário do GitHub' />
    </div>

    <div className='user-info'>

      <img src='https://avatars0.githubusercontent.com/u/28025731?v=4' />

      <h1 className='username'>
        <a href='https://api.github.com/users/luidyvcc'>Luiggi Vaccaro</a>
      </h1>

      <ul className='repos-info'>
        <li>- Repositórios: 123</li>
        <li>- Seguidores: 123</li>
        <li>- Seguindo: 123</li>
      </ul>

    </div>

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
