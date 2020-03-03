'use strict'

import { expect } from 'chai';
const sum = require('./sum')

it('Sum should be a function', () => {
  expect(sum).to.be.a('function')
})