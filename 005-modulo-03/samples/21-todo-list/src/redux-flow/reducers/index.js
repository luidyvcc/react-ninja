'use strict'

import reducerTodos from 'reducers/todos'
import reducerVisibilityFilter from 'reducers/visibility-filter'

const rootReducer = (state = {}, action) => {
  return {
    todos: reducerTodos(state.todos, action),
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
  }
}

export default rootReducer