'use strict'

import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibility-filter'

const combineReducers = (reducers) => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    return {
      ...nextState,
      [key]: reducers[key](state[key], action)
    }
  }, {})
}

export default combineReducers({ todos, visibilityFilter })
