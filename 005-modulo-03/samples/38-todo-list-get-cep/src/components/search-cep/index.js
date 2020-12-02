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
    isFetching: false,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    const response = await ajax.get(`https://ws.apicep.com/cep/${cep}.json`)
    
    this.setState({ isFetching: false })
    this.setState(response)
  }

  render () {
    return (
      <SearchCep {...this.state} handleSubmit={this.handleSubmit} />
    )
  }
}

export default SearchCepContainer
