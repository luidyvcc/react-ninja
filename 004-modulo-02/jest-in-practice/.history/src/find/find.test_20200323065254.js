'use strict'

import { expect } from 'chai'
import find from './find'

it('find should be a function', () => {
  expect(find).to.be.a('function');
})

it('find([1, 2, 3], (item) => item === 1) shoul return 1', () => {
  expect(find([1, 2, 3], (item) => item === 1))
})


