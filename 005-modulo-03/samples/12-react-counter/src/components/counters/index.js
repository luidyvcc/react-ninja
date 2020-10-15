'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Counter from 'components/counter'
import {
  addCounter,
  removeCounter,
  increment,
  decrement
} from 'reducers/counters/action-creator'

const Counters = ({ counters, addCounter, removeCounter, increment, decrement }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {counters.map((counter, index) => (
        <Counter {...{
          key: index,
          counter,
          removeCounter: removeCounter(index),
          increment: increment(index),
          decrement: decrement(index)
        }} />
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
      <button onClick={addCounter}>Adicionar contador</button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: (index) => () => dispatch(removeCounter(index)),
  increment: (index) => () => dispatch(increment(index)),
  decrement: (index) => () => dispatch(decrement(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
