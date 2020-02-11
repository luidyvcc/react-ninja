'use strict'

import React from 'react'
import PropTypes from 'prop-types';

const Repos = ({ className, title, repos }) =>
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((item, index) =>
        <li key={`repo_${item.name}_${index}`}>
          <a href={item.link}>{item.name}</a>
        </li>
      )}
    </ul>
  </div>

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.prototype = {
  className: Proptypes.string,
  title: Proptypes.string.isRequired,
  repos: Proptypes.array
}

export default Repos
