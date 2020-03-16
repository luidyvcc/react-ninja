'use strict'

import { expect } from 'chai'
import reverse from './reverse'

it('reverse should be a function', () => {
  expect(reverse).to.be.a('function');
})

it('reverse[]) should return []', () => {
  expect(reverse([])).to.be.deep.equal([]);
})

it('reverse[5]) should return [5]', () => {
  expect(reverse([5])).to.be.deep.equal([5]);
})

it('reverse[1, 2, 3]) should return [3, 2, 1]', () => {
  expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1]);
})

it('reverse["a", "b", "c"]) should return ["c", "b", "a"]', () => {
  expect(reverse(["a", "b", "c"])).to.be.deep.equal(["c", "b", "a"]);
})
