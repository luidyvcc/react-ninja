'use strict'

import { expect } from 'chai'
import filter from './filter'

it('filter should be a function', () => {
  expect(filter).to.be.a('function');
})

it('filter([1, 2, 3], item => item) should return [1, 2, 3]', () => {
  expect(filter([1, 2, 3], item => item)).to.deep.equal([1, 2, 3]);
})

it('filter([1, 2, 0], item => item) should return [1, 2]', () => {
  expect(filter([1, 2, 0], item => item)).to.deep.equal([1, 2]);
})