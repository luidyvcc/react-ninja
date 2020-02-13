'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userInfo }) =>
  <div className='user-info'>

    <img src={userInfo.photo} />

    <h1 className='username'>
      <a href='https://api.github.com/users/luidyvcc'>Luiggi Vaccaro</a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositórios: 123</li>
      <li>- Seguidores: 123</li>
      <li>- Seguindo: 123</li>
    </ul>

  </div>

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo