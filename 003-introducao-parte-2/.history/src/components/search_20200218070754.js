'use strict'

import React from 'react'

const Search = ({ handleSearch }) =>
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onKeyUp={handleSearch}
      disabled={isFetching}
    />
  </div>

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
