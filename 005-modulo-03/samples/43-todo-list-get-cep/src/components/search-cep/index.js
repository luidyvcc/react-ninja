'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'redux'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'
import { updateAdress } from 'reducers/address/actions-creators'

class SearchCepContainer extends PureComponent {
  state = {
    isFetching: false,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    const response = await ajax.get(`https://ws.apicep.com/cep/${cep}.json`)
    
    this.setState({ isFetching: false })
    this.props.updateAdress(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address,
})

const mapDispatchToProps = { updateAdress }

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
