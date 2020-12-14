'use strict'
import { combineReducers } from 'redux'
import address from 'reducers/address'
import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibility-filter'

export default combineReducers({ address, todos, visibilityFilter })
