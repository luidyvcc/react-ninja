'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { SET_VISIBILITY_FILTER, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './actions'
import visibilityFilter, { initialState } from './index'

it('visibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('should show all todos', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_ALL
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just completed todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just active todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  })
  const after = SHOW_ACTIVE
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return latest state when action in unknown', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return initialState when latest state in undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(visibilityFilter(before, action)).to.be.equal(after)
})
