'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userInfo }) =>
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

UserInfo.propTypes

export default UserInfo