'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Avenida Presidente Kennedy - de 1704 ao fim - lado par',
      city: 'Curitiba',
      code: '80610-010',
      district: 'Água Verde',
      state: 'PR',
      status: 1,
    }
  })

  const after = {
    address: 'Avenida Presidente Kennedy - de 1704 ao fim - lado par',
    city: 'Curitiba',
    code: '80610-010',
    district: 'Água Verde',
    state: 'PR',
    status: 1,
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
