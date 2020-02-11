'use strict'

import React from 'react'

export default ({className, title}) =>
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {Response.map((item, index) => {
        <li key={`repo_${item.name}_${index}`}>
          <a href={item.link}>{item.name}</a>
        </li>
      })}
    </ul>
  </div>