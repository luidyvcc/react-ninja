'use strict'

import { expect } from 'chai'
import sum from './sum'

it('Sum should be a function', () => {
  expect(sum).to.be.a('function')
})

it('sum(1, 2) should return 3', () => {
  expect(sum(1, 2)).to.be.a(3)
})