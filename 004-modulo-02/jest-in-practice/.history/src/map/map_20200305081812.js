'use strict'

const map = (array = [], func = item => item) => {
  if (typeof func !== 'function') throw new TypeError('func is not a function')
  return array.map((item, index, array) => func(item, index, array))
}

export default map