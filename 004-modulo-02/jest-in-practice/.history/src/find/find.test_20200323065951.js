'use strict'

import { expect } from 'chai'
import find from './find'

it('find should be a function', () => {
  expect(find).to.be.a('function');
})

it('find([1, 2, 3], (item) => item === 1) shoul return 1', () => {
  expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1)
})

it('find([1, 2, 3], (item) => item === 3) shoul return 1', () => {
  expect(find([1, 2, 3], (item) => item === 3)).to.be.equal(3)
})

it('find([1, 2, 3], (item, index) => index === 1) shoul return 2', () => {
  expect(find([1, 2, 3], (_item, index) => index === 1)).to.be.equal(2)
})

it('find([1, 2, 3], (item, index, array) => array[index] === 2) shoul return 2', () => {
  expect(find([1, 2, 3], (item, index, array) => array[index] === 2)).to.be.equal(2)
})


