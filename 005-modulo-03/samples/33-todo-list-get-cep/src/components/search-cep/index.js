'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  async componentDidMount () {
    const response = await ajax.get('https://ws.apicep.com/cep/06233-030.json')
  }

  render () {
    return (
      <SearchCep />
    )
  }
}

export default SearchCepContainer
