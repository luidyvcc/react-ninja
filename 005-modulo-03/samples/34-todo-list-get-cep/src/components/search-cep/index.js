'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
  }

  async componentDidMount () {
    const response = await ajax.get('https://ws.apicep.com/cep/06233-030.json')
    this.setState(response)
  }

  render () {
    return (
      <SearchCep {...this.state} />
    )
  }
}

export default SearchCepContainer
