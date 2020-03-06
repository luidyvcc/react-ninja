'use strict'

const map = (array = [], func = item => item) => {
  if (typeof func !== 'function') throw new TypeError('func is not a function')
  if (array.length === 0) throw new TypeError('array null')
  let newArray = []

  return map(newArray.push(func(array[0])), func);

  return array.map((item, index, array) => func(item, index, array))
}

export default map