'use strict'

import React from 'react'

export default () =>
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onChange={e => console.log('change', e.target.value)}
    />
  </div>
