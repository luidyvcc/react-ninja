'use strict'

import { expect } from 'chai'
import filter from './filter-recursive'

it('filter should be a function', () => {
  expect(filter).to.be.a('function');
})

it('filter[1, 2, 3], (item) => item should return [3]', () => {
  expect(filter([1, 2, 3], (item) => item > 2)).to.be.deep.equal([3])
})
