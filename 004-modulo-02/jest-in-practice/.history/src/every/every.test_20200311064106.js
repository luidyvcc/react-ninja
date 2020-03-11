'use strict'

import { expect } from 'chai'
import every from './every'

it('every should be a function', () => {
  expect(every).to.be.a('function');
})

it('every([1, 2, 3], item => item > 2) should return false', () => {
  expect(every([1, 2, 3], item => item > 2)).to.be.equal(false);
})

// it('every([0, 1, 2], item => item) should return [1, 2]', () => {
//   expect(every([0, 1, 2], item => item)).to.be.deep.equal([1, 2]);
// })

// it('every([1, 2, 3], item => item < 2) should return [1]', () => {
//   expect(every([1, 2, 3], item => item < 2)).to.be.deep.equal([1]);
// })

// it('every([1, 2, 3], (item, index) => item === index + 1) should return [1, 2, 3]', () => {
//   expect(every([1, 2, 3], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3]);
// })

// it('every([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 3, 5]', () => {
//   const before = every([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item));
//   expect(before).to.be.deep.equal([1, 2, 3, 5]);
// })