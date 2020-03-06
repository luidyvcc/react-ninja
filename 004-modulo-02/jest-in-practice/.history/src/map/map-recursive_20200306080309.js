'use strict'

let counter = 0

const map = (array = [], func = item => item) => {
  if (array.length === 0) {
    return []
    counter = 0
  }
  if (typeof func !== 'function') throw new TypeError('func is not a function')

  const [head, ...tail] = array

  return map(newArray.push(func(array[0])), func);

  return [func(head)]

}

export default map