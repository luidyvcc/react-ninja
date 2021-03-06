'use strict'

import { expect } from 'chai'
import every from './every'

it('every should be a function', () => {
  expect(every).to.be.a('function');
})

it('every([], item => item', () => {
  expect(every([], item => item)).to.be.ok;
})

it('every([1, 2, 3], item => item > 2) should return false', () => {
  expect(every([1, 2, 3], item => item > 2)).to.not.be.ok;
})

it('every([1, 2, 3], item => item > 0) should return true', () => {
  expect(every([1, 2, 3], item => item > 0)).to.be.ok;
})

