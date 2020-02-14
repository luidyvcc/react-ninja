'use strict'

import React from 'react'

export default ({ getRepos, getStarred }) =>
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
