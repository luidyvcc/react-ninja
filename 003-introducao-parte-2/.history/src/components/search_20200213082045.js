'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

export default () =>
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onKeyUp={e => {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13
        if (keyCode === ENTER) {
          ajax().get(`https://api.github.com/users/${value}`)
        }
        console.log('change', keyCode)
      }}
    />
  </div>
