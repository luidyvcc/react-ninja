'use strict'

import { expect } from 'chai'
import some from './some'

it('some should be a function', () => {
  expect(some).to.be.a('function');
})

it('some([], item => item', () => {
  expect(some([], item => item)).to.be.ok; // boolean test
})

it('some([0, 2, 3], item => item) should return false', () => {
  expect(some([0, 2, 3], item => item)).to.not.be.ok; // boolean test
})

it('some([1, 2, 3], item => item > 2) should return false', () => {
  expect(some([1, 2, 3], item => item > 2)).to.not.be.ok; // boolean test
})

it('some([1, 2, 3], item => item > 0) should return true', () => {
  expect(some([1, 2, 3], item => item > 0)).to.be.ok;
})

it('some([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
  expect(some([1, 2, 3], (item, index) => index === item - 1)).to.be.ok;
})

it('some([1, 2, 3], (item, index, array) => array.lenth === 3) should return true', () => {
  expect(some([1, 2, 3], (_item, _index, array) => array.length === 3)).to.be.ok;
})

