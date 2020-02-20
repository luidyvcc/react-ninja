'use strict'

import React from 'react'

const Search = ({ handleSearch, isFetching }) =>
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onKeyUp={handleSearch}
      disabled={isFetching}
    />
  </div>

Search.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
