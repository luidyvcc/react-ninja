'use strict'

import { expect } from 'chai'
import reduce from './reducer-recursive'
import reduceRight from './reducer-right-recursive'

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function');
})

it('reduce([1, 2], (acc, item) => acc + item) should return 3', () => {
  expect(reduce([1, 2], (acc, item) => acc + item)).to.be.equal(3)
})

it('reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
  expect(reduce([1, 2], (acc, item, index) => acc + index, 0)).to.be.equal(1)
})

it('reduce([3, 4], (acc, item) => acc + item) should return 7', () => {
  expect(reduce([3, 4], (acc, item) => acc + item)).to.be.equal(7)
})

it('reduce([3, 4], (acc, item) => acc + item, 1) should return 8', () => {
  expect(reduce([3, 4], (acc, item) => acc + item, 1)).to.be.equal(8)
})

it('reduce([1, 2, 3], (acc, item) => {acc + item; return acc}, {}) should return {}', () => {
  expect(reduce([1, 2, 3], (acc, item) => { acc['index' + item] = item; return acc }, {})).to.be.deep.equal({ index1: 1, index2: 2, index3: 3 })
})

it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) should return 3', () => {
  expect(reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)).to.be.equal(3)
})

it('reduceRight(["do", "nan", "fer"], (acc, item) => acc + item, "") should return "fernando"', () => {
  const before = reduceRight(['do', 'nan', 'fer'], (acc, item) => acc + item, '')
  const after = 'fernando'
  expect(before).to.be.equal(after)
})
