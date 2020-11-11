'use strict'

import { combineReducers } from 'redux'
import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibility-filter'

export default combineReducers({ todos, visibilityFilter })
