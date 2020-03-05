'use strict'

const map = (array = [], func) => {
  if (typeof func !== 'function') throw new TypeError('func is not a function')
  if (!Array.isArray(array)) throw new TypeError('array is not an array')
  return array.map((item, index, array) => func(item, index, array))
}

export default map