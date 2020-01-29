'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div>
        <Title name='Fernando' lastName={{middle: 'Mariano', last: 'Daciuk'}} />
      </div>
    )
  }
}

export default App
