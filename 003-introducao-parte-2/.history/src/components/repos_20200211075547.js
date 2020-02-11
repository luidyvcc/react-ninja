'use strict'

import React from 'react'

export default ({ className, title, repos }) =>
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((item, index) => {
        <li key={`repo_${item.name}_${index}`}>
          <a href={item.link}>{item.name}</a>
        </li>
      })}
    </ul>
  </div>
