'use strict'

import { expect } from 'chai'
import filter from './filter-recursive'

it('filter should be a function', () => {
  expect(filter).to.be.a('function');
})

it('filter[1, 2], (item) => item should return [1, 2]', () => {
  expect(filter([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('filter[3, 4], (item) => item should return [3, 4]', () => {
  expect(filter([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('filter[1, 2], (item) => item should return [2, 3]', () => {
  expect(filter([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('filter[4, 6], (item) => item should return [5, 7]', () => {
  expect(filter([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('filter[1, 2], (item, index) => index should return [0, 1]', () => {
  expect(filter([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('filter[1, 2], (item, index, array) => array should return [[1, 2], [1, 2]]', () => {
  expect(filter([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('filter() should should return []', () => {
  expect(filter()).to.be.deep.equal([])
})

it('filter([1, 2]) should should return [1, 2]', () => {
  expect(filter([1, 2])).to.be.deep.equal([1, 2])
})
