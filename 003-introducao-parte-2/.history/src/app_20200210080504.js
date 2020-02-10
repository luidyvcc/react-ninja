'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='user-info'>

      <img src='https://avatars0.githubusercontent.com/u/28025731?v=4' />

      <h2><a href='https://api.github.com/users/luidyvcc'>Luiggi Vaccaro</a></h2>

      <ul className='repos-info'>
        <li>- Repositórios: 123</li>
        <li>- Seguidores: 123</li>
        <li>- Seguindo: 123</li>
      </ul>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <ul className='repos'>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>

      <ul className='starred'>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>
  </div>
)

export default App
