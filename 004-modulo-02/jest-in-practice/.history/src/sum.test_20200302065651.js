'use strict'

const expect = require('chai').expect
const sum = require('./sum')

it('Sum should be a function', () => {
  expect(sum).to.be.a('function')
})