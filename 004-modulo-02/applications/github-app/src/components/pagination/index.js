'use strict'

import React from 'react'
import pagination from 'utils/pagination'

const Pagination = ({ total, activePage }) => (
  <ul>
    {pagination({ total, activePage }).map((pagina, index) => (
      <li key={index}>
        <a href='#'>{pagina}</a>
      </li>
    ))}
  </ul>
)

export default Pagination
