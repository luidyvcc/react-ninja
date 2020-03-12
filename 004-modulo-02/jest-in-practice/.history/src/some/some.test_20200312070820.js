'use strict'

import { expect } from 'chai'
import some from './some'

it('some should be a function', () => {
  expect(some).to.be.a('function');
})

it('some([], item => item', () => {
  expect(some([], item => item)).to.not.be.ok; // boolean test
})

it('some([1, 2], item => item', () => {
  expect(some([1, 2], item => item)).to.be.ok; // boolean test
})

it('some([1, 2, 3], (item, index) => item % 2 === 0', () => {
  expect(some([1, 2, 3], (item, index) => item % 2 === 0)).to.be.ok; // boolean test
})

it('some([1, 5, 3], (item, index) => item % 2 === 0' should return false, () => {
  expect(some([1, 5, 3], (item, index) => item % 2 === 0)).to.not.be.ok; // boolean test
})

it('some([1, 2, 3], item => item > 2', () => {
  expect(some([1, 2, 3], item => item > 2)).to.be.ok; // boolean test
})

it('some([1, 2, 3], item => item > 3', () => {
  expect(some([1, 2, 3], item => item > 3)).to.not.be.ok; // boolean test
})
