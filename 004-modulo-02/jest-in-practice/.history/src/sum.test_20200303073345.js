'use strict'

import { expect } from 'chai';
import sum from './sum'
const sum = require('./sum')

it('Sum should be a function', () => {
  expect(sum).to.be.a('function')
})