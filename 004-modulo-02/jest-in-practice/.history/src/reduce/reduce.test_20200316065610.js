'use strict'

import { expect } from 'chai'
import reduce from './reduce'

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function');
})

it('reduce[1, 2], (acc, item) => acc + item should return 3', () => {
  expect(reduce([1, 2], (acc, item) => acc + item)).to.be.deep.equal(3)
})

it('reduce[3, 4], (acc, item) => acc + item should return 7', () => {
  expect(reduce([3, 4], (acc, item) => acc + item)).to.be.deep.equal(7)
})

it('reduce[3, 4], (acc, item) => acc + item, 1 should return 8', () => {
  expect(reduce([3, 4], (acc, item) => acc + item, 1)).to.be.deep.equal(8)
})
