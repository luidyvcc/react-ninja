'use strict'

import { expect } from 'chai'
import filter from './filter'

it('filter should be a function', () => {
  expect(filter).to.be.a('function');
})

it('filter([1, 2, 3], item => item) should return [1, 2, 3]', () => {
  expect(filter([1, 2, 3], item => item)).to.be.deep.equal([1, 2, 3]);
})

it('filter([0, 1, 2], item => item) should return [1, 2]', () => {
  expect(filter([0, 1, 2], item => item)).to.be.deep.equal([1, 2]);
})

it('filter([1, 2, 3], item => item) should return [1, 2, 3]', () => {
  expect(filter([1, 2, 3], item => item)).to.be.deep.equal([1, 2, 3]);
})